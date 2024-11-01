import { prodAuthCreds } from "@/credentials/prodAuthCreds";
import { ProjectSettings } from "@/projectSettings";
import { Browser, chromium, Page, test as setup } from "@playwright/test";
import fs from 'fs';

interface Credentials {
    email: string;
    password: string;
}

setup('Setting Up User', async () => {
    await setupUser(await prodAuthCreds(), ProjectSettings.storageStateBusiness);
});

async function setupUser(creds: Credentials, storageState: string): Promise<void> {
    const browser: Browser = await chromium.launch();
    const page: Page = await browser.newPage();

    // Saves the Bearer token to Storage State for API testing
    page.on('request', async (request) => {
        if (request.url().includes('api/pros/meets/count')) {
            try {
                const authHeader = request.headers()['authorization'];
                if (authHeader && authHeader.startsWith('Bearer ')) {
                    const bearerToken = authHeader.split('Bearer ')[1];
                    let filePath: string = ProjectSettings.storageStateBusinessToken;
                    const tokenObject = { accessToken: bearerToken };
                    fs.writeFileSync(filePath, JSON.stringify(tokenObject));
                }
            } catch (error) {
                console.error(`Error processing Bearer token: ${error}`);
            }
        }
    });

    await page.goto('/login');
    await page.locator('input[name="email"]').fill(creds.email);
    await page.locator('button[type="submit"].MuiButton-containedPrimary').click();
    await page.locator('input[name="password"]').fill(creds.password);
    await page.locator('button[type="submit"].MuiButton-containedPrimary').click();

    await page.waitForResponse('**/api/pros/meets/count');

    await page.context().storageState({ path: storageState });

    await browser.close();
}

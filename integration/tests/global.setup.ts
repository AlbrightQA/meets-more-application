import { chromium, test as setup, Page, Browser } from "@playwright/test"
import { prodAuthCreds } from "../credentials/prodAuthCreds"
import { ProjectSettings } from "../projectSettings"
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
                    fs.writeFileSync(filePath, bearerToken);
                }
            } catch (error) {
                console.error(`Error processing Bearer token: ${error}`);
            }
        }
    });

    await page.goto('/login');
    await page.locator('input[name="email"]').fill(creds.email);
    await page.locator('button[type="submit"]:has-text("次へ")').click();
    await page.locator('input[name="password"]').fill(creds.password);
    await page.locator('button[type="submit"]:has-text("ログイン")').click();
    
    await page.waitForResponse('**/api/pros/meets/count');

    await page.context().storageState({ path: storageState });

    await browser.close();
}

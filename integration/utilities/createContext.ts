import { chromium, Browser, BrowserContext, Page } from "@playwright/test";
import { ProjectSettings } from "@/projectSettings";

interface ContextResult {
    browser: Browser;
    context: BrowserContext;
    page: Page;
    close: () => Promise<void>;
}

export async function createContext(userState: string): Promise<ContextResult> {
    const browser = await chromium.launch();
    let storageState: string;

    switch (userState) {
        case 'business':
            storageState = ProjectSettings.storageStateBusiness;
            break;
        default:
            throw new Error(`Invalid user state: ${userState}`);
    }

    const context = await browser.newContext({
        storageState: storageState,
        timezoneId: 'America/Denver'
    });

    async function close() {
        await context.close();
        await browser.close();
    }

    return { browser, context, page: await context.newPage(), close };
}

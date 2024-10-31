import { test, expect } from '@playwright/test';
import dayjs from 'dayjs';
import { createContext } from '@/utilities/createContext';

test.describe('Calendar Tests', () => {
    test('Verify calendar selection and API responses', async () => {
        console.log('>>>VERIFY API RESPONSE ON CALENDAR SELECTION<<<');
        const { page, close } = await createContext('business');
        // Navigate to schedules page
        await page.goto('/account/schedules');

        // Handle tooltip if it appears
        try {
            const closeButton = await page.locator('[data-testid="release-balloon-close-button"]');
            if (await closeButton.isVisible({ timeout: 2000 })) {
                await closeButton.click();
            }
        } catch (error) {
            console.log('Tooltip not found, continuing with test');
        }

        // Get today's date in ISO format (YYYY-MM-DD)
        const today = dayjs().format('YYYY-MM-DD');

        // First click - could be either create or delete
        await page.locator('[data-is-disabled="false"]').first().click();
        
        const firstResponse = await page.waitForResponse(
            response => (response.url().includes('/api/schedules') || response.url().includes('/api/schedules/delete')) 
                && response.request().method() === 'POST'
        );
        expect(firstResponse.status()).toBe(201);

        // Second click - should be the opposite of first response
        await page.locator('[data-is-disabled="false"]').first().click();
        
        const secondResponse = await page.waitForResponse(
            response => (response.url().includes('/api/schedules') || response.url().includes('/api/schedules/delete')) 
                && response.request().method() === 'POST'
        );
        expect(secondResponse.status()).toBe(201);

        // If either response was a create, verify the dates
        if (firstResponse.url().includes('/api/schedules') && !firstResponse.url().includes('delete')) {
            const schedulesData = await firstResponse.json();
            expect(schedulesData[0].createdAt.startsWith(today)).toBeTruthy();
            expect(schedulesData[0].updatedAt.startsWith(today)).toBeTruthy();
        } else if (secondResponse.url().includes('/api/schedules') && !secondResponse.url().includes('delete')) {
            const schedulesData = await secondResponse.json();
            expect(schedulesData[0].createdAt.startsWith(today)).toBeTruthy();
            expect(schedulesData[0].updatedAt.startsWith(today)).toBeTruthy();
        }

        await close();
    });
}); 
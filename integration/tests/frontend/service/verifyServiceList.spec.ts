// This Describe Block is intended to have it's tests run sequentially
// First we check that we can add a service
// Then we check that we can delete a service
// Finally, we check that we cannot have less than 1 service. Indicated by the lack of a 'Delete' button

import { service } from '@/globals';
import { createContext } from '@/utilities/createContext';
import { expect, test } from '@playwright/test';

test.describe('Service List Tests', () => {
    test('Verify Addition of Service', async () => {
        console.log('>>>VERIFY ADDITION OF SERVICE<<<');
        const { page, close } = await createContext('business');

        // Navigate to the "Add Service" page
        await page.goto('/account/services/add');

        // Select the "iPhone" service
        await page.locator('span:has-text("iPhone")').click();

        // Click the "Update" button
        await page.locator('button:has-text("更新する")').click();

        // Expect PUT request to return 200
        page.on('request', async (request) => {
            if (request.url().includes('api/profiles') && request.method() === 'PUT') {
                const response = await request.response();
                if (response) {
                    expect(response.status()).toBe(200);
                } else {
                    throw new Error('Response is null');
                }
            }
        });

        await close();
    });

    test('Verify Deletion of Service', async () => {
        console.log('>>>VERIFY DELETION OF SERVICE<<<');
        const { page, close } = await createContext('business');

        await page.goto(`/account/services/${service['iPhone'].uuid}`);

        // Click the "Delete" button using class selectors
        await page.locator('button:has-text("このサービスの提供を停止する")').click();

        // Click the confirmation button "はい"
        await page.locator('button:has-text("はい")').click();

        // Expect PUT request to return 200
        page.on('request', async (request) => {
            if (request.url().includes('api/profiles') && request.method() === 'PUT') {
                const response = await request.response();
                if (response) {
                    expect(response.status()).toBe(200);
                } else {
                    throw new Error('Response is null');
                }
            }
        });

        await close();
    });

    test('Verify Minimum Service Count', async () => {
        console.log('>>>VERIFY USER CANNOT HAVE LESS THAN 1 SERVICE<<<');
        const { page, close } = await createContext('business');

        await page.goto(`/account/services/${service['Android'].uuid}`);

        // Assert that the 'Delete' button is not visible
        await expect(page.locator('button:has-text("このサービスの提供を停止する")')).toBeHidden();

        await close();
    });
});

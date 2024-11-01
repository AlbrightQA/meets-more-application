import { accessToken } from '@/storageState/BusinessAccessToken.json';
import { request } from '@playwright/test';

export const postSchedulesDelete = async (scheduleId: string) => {
    // Create the request body
    const requestBody = [
        `${scheduleId}`
    ];

    // Create a new API request context (if not already created)
    const apiRequestContext = await request.newContext();

    // Make the POST request using the relative path
    const response = await apiRequestContext.post('/api/schedules/delete', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        },
        data: JSON.stringify(requestBody)
    });

    return response.status(); // Return the status code directly
};
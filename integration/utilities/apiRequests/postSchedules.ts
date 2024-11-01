import { accessToken } from '@/storageState/BusinessAccessToken.json';
import { request } from '@playwright/test';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc'; // Import the utc plugin
dayjs.extend(utc); // Extend dayjs with the utc plugin

export const postSchedules = async () => {
    // Get the current date in UTC
    const now = dayjs.utc();

    // Calculate endTime and startTime
    const endTime = now.endOf('hour').toISOString(); // Last millisecond of the current hour
    const startTime = now.startOf('hour').toISOString(); // Start of the current hour

    // Create the request body
    const requestBody = [
        {
            endTime: endTime,
            startTime: startTime,
            type: "block"
        }
    ];

    // Create a new API request context (if not already created)
    const apiRequestContext = await request.newContext();

    // Make the POST request using the relative path
    const response = await apiRequestContext.post('/api/schedules', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        },
        data: JSON.stringify(requestBody)
    });

    const responseData = await response.json();

    return {
        response,
        status: response.status(),
        id: responseData[0]?.id
    };
};
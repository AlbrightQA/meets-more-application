import { postSchedules } from '@/utilities/apiRequests/postSchedules';
import { postSchedulesDelete } from '@/utilities/apiRequests/postSchedulesDelete';
import { expect, test } from '@playwright/test';

let scheduleId: string;

test.describe('POST /schedules', () => {
    test('should create a new schedule', async () => {
        console.log('>>>VERIFY POST /schedules API RESPONSE<<<');
        const { response, id } = await postSchedules();
        scheduleId = id;
        expect(response.status()).toBe(201);
    });

    test('should delete a schedule', async () => {
        console.log('>>>VERIFY POST /schedules/delete API RESPONSE<<<');
        const responseStatus = await postSchedulesDelete(scheduleId);
        expect(responseStatus).toBe(201);
    });
});

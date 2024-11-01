export interface Service {
    name: string;
    uuid: string;
}

export const service: Record<string, Service> = {
    'iPhone': {
        name: 'iPhoneアプリ作成',
        uuid: '591954419a828369f3dd2aad',
    },
    'Android': {
        name: 'Androidアプリ作成',
        uuid: '5a7328f139234f4edf9568d0',
    },
};

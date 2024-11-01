import * as dotenv from 'dotenv';
import * as path from 'path';

// Load environment variables from the .env file in the credentials folder
const envPath = path.resolve(__dirname, 'credentials/.env');
console.log('Loading .env file from:', envPath);
dotenv.config({ path: envPath });

interface Credentials {
    email: string;
    password: string;
}

export async function prodAuthCreds(): Promise<Credentials> {
    return {
        email: process.env.EMAIL || '',
        password: process.env.PASSWORD || '',
    };
}
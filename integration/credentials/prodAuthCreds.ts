import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.join(__dirname, '.env') });

interface Credentials {
    email: string;
    password: string;
}

// Plain text credentials are imported in the interest of ease of use for this specific demo.
// Going forward I will advocate for Secrets Manager.
export async function prodAuthCreds(): Promise<Credentials> {
    const { EMAIL = '', PASSWORD = '' } = process.env;
    return { email: EMAIL, password: PASSWORD };
}
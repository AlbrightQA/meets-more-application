interface Credentials {
    email: string;
    password: string;
}

export async function prodAuthCreds(): Promise<Credentials> {
    return {
    email: 'albrightevan@gmail.com',
    password: 'pwPass7!',
    };
}
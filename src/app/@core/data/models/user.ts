export interface User {
    id: string,
    email: string,
    firstname?: string,
    lastname?: string,
    phone?: string,
    password?: string,
    roles?: any;
    displayName?: string;
    photoURL?: string;
    location: any;
}

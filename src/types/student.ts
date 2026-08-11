export interface Student {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    age: number | null;
}

export interface StudentInput {
    first_name: string;
    last_name: string;
    email: string;
    age?: number | null;
}

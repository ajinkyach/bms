import { BaseModel } from './base-model';

export class User extends BaseModel {

    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    password: string;

    constructor() {
        super();
    }
}
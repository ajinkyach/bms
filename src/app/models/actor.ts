import { BaseModel } from './base-model';

export class Actor extends BaseModel {

    role: string;
    image?: string;

    constructor() {
        super();
    }
}
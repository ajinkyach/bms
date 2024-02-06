import { BaseModel } from './base-model';

export class Theatre extends BaseModel {

    address: string;
    city_id: number;
    state_id: number;
    zipcode: string;
    mticket?: boolean;
    food_beverages?: boolean;
    cancellation_available?: boolean;
    available_formats: Object;
    screens: number;

    constructor() {
        super();
        this.mticket = false;
        this.food_beverages = false;
        this.cancellation_available = false;
    }
}
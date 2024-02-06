export class Show {

    movie_id: number;    
    theatre_id: number;
    theatre_name: string;
    mticket?: boolean;
    food_beverages?: boolean;
    cancellation_available?: boolean;
    time: string;
    language: string;
    format: string;
    price: Object;

    constructor() {
        this.mticket = false;
        this.food_beverages = false;
        this.cancellation_available = false;
        this.price = new Object();
    }
}
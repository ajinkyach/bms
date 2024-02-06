export class Booking {

    id: number;
    user_id: number;
    movie_id: number;  
    movie_name: string;  
    theatre_id: number; 
    theatre_name: string;
    date: string;   
    time: string;
    language: string;
    format: string;
    price: number;
    seats: Array<Object>;
    booking_id?: string;

    constructor() {
        this.seats = new Array<Object>();
        this.booking_id = "";
    }
}
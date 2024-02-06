import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as shortid from "shortid";

import { Booking } from '../../models/booking';

@Injectable()
export class PaymentService {

    constructor(private _http: HttpClient) {

    }

    pay(booking: Booking) {
        booking.booking_id = shortid.generate();
        let bookings = JSON.parse(localStorage.getItem("bookings"));
        if(!bookings) {
            bookings = new Array<Booking>();
        }        
        bookings.push(booking);
        localStorage.removeItem("bookings");
        localStorage.setItem("bookings", JSON.stringify(bookings));
        // return await this._http.post("api/bookings", booking).toPromise();
    }

}

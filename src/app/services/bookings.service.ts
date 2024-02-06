import { Injectable } from '@angular/core';

import { Booking } from "../models/booking";

@Injectable()
export class BookingService {

    booking = new Booking();

    constructor() { }

    getBooking() {
        return this.booking;
    }

    setBooking(_booking: Booking) {
        this.booking = _booking;
    }

    clearBooking() {
        this.booking = new Booking();
    }
}

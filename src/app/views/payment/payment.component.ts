import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import * as moment from "moment-timezone";
import * as shortid from "shortid";

import { PaymentService } from './payment.service';
import { BookingService } from '../../services/bookings.service';
import { AuthService } from '../../services/auth.service';

import { Booking } from '../../models/booking';
import { NgxPermissionsService } from 'ngx-permissions';
import { User } from '../../models/user';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  booking = new Booking();
  success: boolean = false;
  loggedInUser = new User();
  isLoggedIn: boolean = false;

  constructor(private _router: Router,
    private _paymentService: PaymentService,
    private _bookingService: BookingService,
    private _authService: AuthService,
    private _permissionService: NgxPermissionsService) {
    this._permissionService.permissions$.subscribe((data) => {
      if (data["AUTHENTICATED"]) {
        setTimeout(() => {
          this.isLoggedIn = true;
          this.loggedInUser = this._authService.getUser();
          this.booking.user_id = this.loggedInUser.id;
        }, 100)
      }
      else {
        this.isLoggedIn = false;
        this.loggedInUser = new User();
      }
    })
  }

  ngOnInit() {
    this.booking = this._bookingService.getBooking();
    this.isLoggedIn = this._authService.checkIfLoggedIn();
  }

  pay() {
    try {
      // let result = await this._paymentService.pay(this.booking);
      // console.log(result);
      this.booking.booking_id = shortid.generate();
      let bookings = JSON.parse(localStorage.getItem("bookings"));
      if (!bookings) {
        bookings = new Array<Booking>();
      }
      bookings.push(this.booking);
      localStorage.removeItem("bookings");
      localStorage.setItem("bookings", JSON.stringify(bookings));
      this._bookingService.clearBooking();
      this.success = true;
    }
    catch (ex) {
      console.log(ex);
    }
  }

}

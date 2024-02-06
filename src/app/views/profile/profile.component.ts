import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import * as moment from "moment-timezone";

import { BookingService } from '../../services/bookings.service';
import { AuthService } from '../../services/auth.service';

import { Booking } from '../../models/booking';
import { User } from '../../models/user';
import { Helper } from '../../services/helper.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    loggedInUser = new User();
    bookings = new Array<Booking>();
    success: boolean = false;

    constructor(private _router: Router,
        private _authService: AuthService,
        private _helper: Helper) {

    }

    ngOnInit() {
        this.loggedInUser = this._authService.getUser();
        this.getBookingsByUserId(this.loggedInUser.id);
    }

    getBookingsByUserId(id) {
        let bkngs = JSON.parse(localStorage.getItem("bookings"));
        if (bkngs) {
            this.bookings = bkngs.filter((bb) => {
                return bb.user_id == this.loggedInUser.id;
            });
        }
    }

    getImage(name: string) {
        if (name) {
            name = name.replace(/[^a-zA-Z0-9\s]/g, '').replace(" ", "-").toLowerCase();
            return this._helper.getImageSource(name + ".jpg", 1, 1);
        }
    }

}

import { Injectable } from "@angular/core";
import {
    Router,
    CanActivate,
    CanActivateChild,
    CanLoad,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Route
} from "@angular/router";

import { BookingService } from '../services/bookings.service';

@Injectable()
export class PaymentGuard implements CanActivate, CanActivateChild, CanLoad {
    constructor(
        private _router: Router,
        private _bookingService: BookingService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        return new Promise((resolve: Function, reject: Function) => {
            let booking = this._bookingService.getBooking()
            if (!booking.movie_id) {
                // not logged in so redirect to login page with the return url
                this._router.navigate(['/']);
                reject(true);
            }
            else
                resolve(true);
        });
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        return this.canActivate(route, state);
    }

    canLoad(route: any): Promise<boolean> {
        return new Promise((resolve: Function, reject: Function) => {
            let booking = this._bookingService.getBooking()
            if (!booking.movie_id) {
                // not logged in so redirect to login page with the return url
                this._router.navigate(['/']);
                reject(true);
            }
            else
                resolve(true);
        });
    }

}

import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { BsModalService, BsModalRef, TabDirective } from 'ngx-bootstrap';
import * as moment from "moment-timezone";

import { TicketsService } from './tickets.service';
import { Helper } from '../../services/helper.service';
import { BookingService } from '../../services/bookings.service';
import { AuthService } from '../../services/auth.service';

import { Movie } from '../../models/movie';
import { Show } from '../../models/show';
import { SeatArrangement } from '../../models/seat-arrangement';
import { Booking } from '../../models/booking';

import { Certifications } from '../../enums/certifications.enum';

@Component({
    selector: 'app-tickets',
    templateUrl: './tickets.component.html',
    styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

    id: number;
    name: string;
    movie = new Movie();
    selectedDate: number = 1;
    show = new Show();
    showsObj = new Object();
    showObjKeys = new Array<string>();
    bgImage: Object;
    certifications = Certifications;
    play: boolean = false;
    today: string;
    tomorrow: string;
    dayaftertomorrow: string;
    noOfSeats: number = 1;
    seats = new SeatArrangement();
    blockSeats: boolean = false;
    currentSelectedSeats = new Array<any>();
    totalPrice: number = 0;

    seatNumberRef: BsModalRef;
    seatArrangementRef: BsModalRef;

    constructor(private _router: Router,
        private _route: ActivatedRoute,
        private _ticketsService: TicketsService,
        private _helper: Helper,
        private _modalService: BsModalService,
        private _bookingService: BookingService,
        private _authService: AuthService) {

    }

    ngOnInit() {
        this._route.params.subscribe((params) => {
            this.id = params["id"];
            this.name = params["name"];
            this.selectedDate = params["date"];
            this.getMovie(this.id);
            this.getShowsByMovieIdAndDate(this.id);
            let src = this._helper.getImageSource(this.name + ".jpg", 1, 0);
            this.bgImage = { 'background': `url(${src})`, };
        });
        this.today = moment().format("MM/DD/YYYY");
        this.tomorrow = moment().add(1, 'days').format("MM/DD/YYYY");
        this.dayaftertomorrow = moment().add(2, 'days').format("MM/DD/YYYY");
    }

    async getMovie(id: number) {
        try {
            this.movie = await this._ticketsService.getMovieById(id);
        }
        catch (ex) {
            console.log(ex);
        }
    }

    async getShowsByMovieIdAndDate(id: number) {
        this.showsObj = new Object();
        this.showObjKeys = new Array<string>();
        try {
            let result = await this._ticketsService.getShowsByMovieIdAndDate(id, this.selectedDate);
            result.forEach((res) => {
                if (!this.showsObj[res.theatre_name]) {
                    this.showsObj[res.theatre_name] = [];
                    this.showObjKeys.push(res.theatre_name);
                }
                this.showsObj[res.theatre_name].push(res);

            });
        }
        catch (ex) {
            console.log(ex);
        }
    }

    getImage(name: string, orientation?: number) {
        if (name) {
            if (orientation >= 0) {
                return this._helper.getImageSource(name, 1, orientation);
            }
            else {
                return this._helper.getImageSource(name, 2);
            }
        }
    }

    openSeatNumber(template: TemplateRef<any>, show: Show) {
        this.noOfSeats = 1;
        this.show = show;
        this.seatNumberRef = this._modalService.show(template, {
            class: "seatNumber",
            animated: true,
            backdrop: true
        });
    }

    onSelect(data: TabDirective) {
        this.noOfSeats = Number(data.heading);
    }

    async openSeatArrangement(template) {
        this.seatNumberRef.hide();
        this.currentSelectedSeats = new Array<any>();
        this.totalPrice = 0;
        this.seats = new SeatArrangement();
        this.seatArrangementRef = this._modalService.show(template, {
            class: "modal-lg seatArrangement",
            animated: true,
            backdrop: true
        });
        try {
            let result = await this._ticketsService.getSeatsByTheatreId(this.show.theatre_id);
            let bookings = JSON.parse(localStorage.getItem("bookings"));
            let tempseats = result[0];
            if(bookings) {
                let tempdate = "";
                if(this.selectedDate == 1) {
                    tempdate = this.today;
                }
                else if(this.selectedDate == 2) {
                    tempdate = this.tomorrow;
                }
                else {
                    tempdate = this.dayaftertomorrow;
                }
                bookings.forEach((booking) => {
                    
                    if(booking.time == this.show.time && booking.date == tempdate && booking.movie_id == this.show.movie_id && booking.theatre_id == this.show.theatre_id) {
                        booking.seats.forEach((seat) => {
                            tempseats.seats[seat.category][seat.row][seat.column] = 2;
                        })                        
                    }
                })
            }
            this.seats = tempseats;
            
        }
        catch (ex) {
            console.log(ex);
        }
    }

    async selectSeats(category: string, row: string, column: number) {
        if(this.seats.seats[category][row][column] != 0) {
            return;
        }
        this.seats.seats[category][row][column] = 1;        
        if(this.currentSelectedSeats.length == this.noOfSeats) {
            this.currentSelectedSeats.forEach(t => {
                this.seats.seats[t.category][t.row][t.column] = 0
            });
            this.currentSelectedSeats = new Array<any>();
            this.totalPrice = 0;
        }
        this.currentSelectedSeats.push({
            category: category,
            row: row,
            column: column,
            price: this.show.price[category]

        });
        this.totalPrice = this.totalPrice + this.show.price[category];
        // this.blockSeats = this.currentSelectedSeats.length == this.noOfSeats;
    }

    buyTickets() {
        let booking = new Booking();
        let user = this._authService.getUser();
        if(user) {
            booking.user_id = user.id;
        }
        else {
            booking.user_id = 0;
        }
        booking.price = this.totalPrice;
        if(this.selectedDate == 1) {
            booking.date = this.today;
        }
        else if(this.selectedDate == 2) {
            booking.date = this.tomorrow;
        }
        else {
            booking.date = this.dayaftertomorrow;
        }
        booking.format = this.show.format;
        booking.language = this.show.language;
        booking.movie_id = this.show.movie_id;
        booking.movie_name = this.movie.name;
        booking.theatre_id = this.show.theatre_id;
        booking.theatre_name = this.show.theatre_name;
        booking.time = this.show.time;
        booking.seats = this.currentSelectedSeats;
        
        this._bookingService.setBooking(booking);

        this.seatArrangementRef.hide();
        this._router.navigate(["payment"]);
    }

    ngOnDestroy() {
       
    }

}

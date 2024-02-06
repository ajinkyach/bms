import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Users } from '../in-memory-data/users';
import { Searches } from '../in-memory-data/searches';
import { Theatres } from '../in-memory-data/theatres';
import { Movies } from '../in-memory-data/movies';
import { Shows } from '../in-memory-data/shows';
import { Bookings } from '../in-memory-data/bookings';
import { SeatArrangements } from '../in-memory-data/seat-arrangements';

@Injectable()
export class WebApiService implements InMemoryDbService {

    constructor() {

    }

    createDb() {
        let users = Users;
        let searches = Searches;
        let theatres = Theatres;
        let movies = Movies;
        let shows = Shows;
        let bookings = Bookings;
        let seats = SeatArrangements;

        let temp = this.getBookingsFromLocalStorage();
        if(temp && temp.length > 0){
            temp.forEach(bk => {
                bookings.push(bk);
            });
        }

        return { users, searches, theatres, movies, shows, bookings, seats };
    }

    getBookingsFromLocalStorage() {
        return JSON.parse(localStorage.getItem("bookings"));
    }
}
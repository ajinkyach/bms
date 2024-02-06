import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import * as moment from "moment-timezone";

import { Movie } from '../../models/movie';
import { Show } from '../../models/show';
import { SeatArrangement } from '../../models/seat-arrangement';

@Injectable()
export class TicketsService {

    constructor(private _http: HttpClient) {

    }
    
    async getMovieById(id: number) {
        return await this._http.get<Movie>("api/movies/"+id).toPromise();
    }

    async getShowsByMovieIdAndDate(id: number, selectedDate: number) {
        return await this._http.get<Array<Show>>("api/shows")
        .pipe(
            map((shows: Show[]) => {
                console.log("Shows: ", shows);
                shows = shows.filter((show) => {
                    if(show.movie_id == id)
                    {
                        let dd = moment([moment().year(), moment().month(), moment().date()]);
                        dd.add(selectedDate - 1, "days");
                        if(show.time.split(" ")[1] == "AM") {                            
                            dd.add(Number(show.time.split(':')[0]), "hours");
                        }
                        else {                
                            dd.add((Number(show.time.split(':')[0])%12) + 12, "hours");
                        }
                        return dd.isAfter(moment());
                    }
                    else {
                        return false;
                    }
                });
                console.log("Filtered Shows: ", shows);
                return shows;
            })
        )
        .toPromise();
    }

    async getSeatsByTheatreId(id: number) {
        // return await this._http.get<Array<SeatArrangement>>("api/seats")
        // .pipe(
        //     map((seats) => {
        //         seats = seats.filter((seat) => {
        //             return seat.theatre_id == id;
        //         });
        //         return seats;
        //     })
        // )
        // .toPromise();
        return await this._http.get<Array<SeatArrangement>>("api/seats").toPromise();
    }

}

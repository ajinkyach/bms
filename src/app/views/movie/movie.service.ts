import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Movie } from '../../models/movie';

@Injectable()
export class MovieService {

    constructor(private _http: HttpClient) {

    }

    async getMovieById(id: number) {
        return await this._http.get<Movie>("api/movies/"+id).toPromise();
    }

}

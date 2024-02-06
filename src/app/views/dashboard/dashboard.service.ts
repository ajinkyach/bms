import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Search } from '../../models/search';
import { Movie } from '../../models/movie';

@Injectable()
export class DashboardService {

    constructor(private _http: HttpClient) {

    }

    async getTrendingMovies() {
        return await this._http.get<Array<Search>>("api/searches").toPromise();
    }

    async getAllMovies() {
        return await this._http.get<Array<Movie>>("api/movies").toPromise();
    }

}

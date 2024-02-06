import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Movie } from '../models/movie';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.css']
})
export class ViewsComponent implements OnInit {
  movies = new Array<Movie>();

  constructor(private _http: HttpClient) {    

  }

  ngOnInit() {
    this.getMovies();     
  }

  async getMovies() {
    try {
      let result: Array<Movie> = await this._http.get<Array<Movie>>("api/movies").toPromise();
      this.movies = result;
    }    
    catch(ex) {
      console.log(ex);
    }
  }
}

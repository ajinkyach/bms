import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as moment from "moment-timezone";

import { DashboardService } from './dashboard.service';
import { Helper } from '../../services/helper.service';

import { Search } from '../../models/search';
import { Movie } from '../../models/movie';
import { Certifications } from '../../enums/certifications.enum';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  trends = new Array<Search>();
  movies = new Array<Movie>();
  certifications = Certifications;
  slideConfig = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  constructor(private _router: Router,
    private _dashboardService: DashboardService,
    private _helper: Helper) { }

  ngOnInit() {
    this.getTrendingMovies();
    this.getAllMovies();
  }

  async getTrendingMovies() {
    try {
      this.trends = await this._dashboardService.getTrendingMovies();
    }
    catch (ex) {
      console.log(ex);
    }
  }

  async getAllMovies() {
    try {
      let result = await this._dashboardService.getAllMovies();
      this.movies = result.sort((item1, item2) => {
        return moment.utc(item2.release_date) - moment.utc(item1.release_date);
      })
    }
    catch (ex) {
      console.log(ex);
    }
  }

  getImage(name: string) {
    return this._helper.getImageSource(name, 1, 1);
  }

  goToDetails(movie: Movie) {
    let name = movie.name.replace(/[^a-zA-Z0-9\s]/g,'').replace(" ","-").toLowerCase();
    this._router.navigate(["movie", movie.id, name]);
  }

}

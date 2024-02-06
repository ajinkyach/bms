import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { BsModalService, BsModalRef } from 'ngx-bootstrap';

import { MovieService } from './movie.service';
import { Helper } from '../../services/helper.service';

import { Movie } from '../../models/movie';
import { Certifications } from '../../enums/certifications.enum';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  id: number;
  name: string;
  movie = new Movie();
  bgImage: Object;
  certifications = Certifications;
  play: boolean = false;
  isVideoModal: boolean = false;

  modalRef: BsModalRef;

  constructor(private _router: Router,
    private _route: ActivatedRoute,
    private _movieService: MovieService,
    private _helper: Helper,
    private _modalService: BsModalService) {
      
  }

  ngOnInit() {
    this._route.params.subscribe((params) => {
      this.id = params["id"];
      this.name = params["name"];
      this.getMovie(this.id);
      let src = this._helper.getImageSource(this.name + ".jpg", 1, 0);
      this.bgImage = {'background' : `url(${src})`, };
    });
    this._modalService.onShown.subscribe((reason: string) => {
      if(this.isVideoModal) {
        this.play = true;
      }
      console.log("Video Opened");
    });
    this._modalService.onHidden.subscribe((reason: string) => {
      this.play = false;
      this.isVideoModal = false;
      console.log("Video Closed");
    });
  }

  async getMovie(id: number) {
    try {
      this.movie = await this._movieService.getMovieById(id);
    }
    catch (ex) {
      console.log(ex);
    }
  }

  getImage(name: string, orientation?: number) {
    if(name) {
      if(orientation >= 0 ) {
        return this._helper.getImageSource(name, 1, orientation);
      }
      else {
        return this._helper.getImageSource(name, 2);
      }
    }
  }

  playVideo(template: TemplateRef<any>) {
    this.isVideoModal = true;
    this.modalRef = this._modalService.show(template, { 
      class: "modal-lg videoModal",
      animated: true,
      backdrop: true
    });
  }

  buytickets() {
    this._router.navigate(["buytickets", this.id, this.name, 1]);
  }

  ngOnDestroy() {
    this._modalService.onShown.unsubscribe();
    this._modalService.onHidden.unsubscribe();
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'bms-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

    carouselImages = new Array<string>();
    slideConfig = {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: '25%'
    };
    constructor() {

    }

    ngOnInit() {
        this.carouselImages.push("assets/carousel/carousel1.jpg");
        this.carouselImages.push("assets/carousel/carousel2.jpg");
        this.carouselImages.push("assets/carousel/carousel3.jpg");
        this.carouselImages.push("assets/carousel/carousel4.jpg");              
    }

    ngOnDestroy() {

    }
}

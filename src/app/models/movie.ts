import { BaseModel } from './base-model';
import { Actor } from './actor';

export class Movie extends BaseModel {

    release_date: string;
    entity_type: number;
    certification: number;
    video: string;
    image: string;
    formats: Array<string>;
    languages: Array<string>;
    available_formats: Object;
    runtime: number;
    genre: Array<string>;
    overall_rating: number;
    users_rating: number;
    critics_rating: number;
    rating?: number;
    summary: string;
    cast: Array<Actor>;

    constructor() {        
        super();
        this.formats = new Array<string>();
        this.languages = new Array<string>();
        this.available_formats = new Object();
        this.genre = new Array<string>();        
        this.rating = 0;
        this.cast = new Array<Actor>();
    }
}
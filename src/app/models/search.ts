import { Entities } from '../enums/entities.enum';

export class Search {
    term: string;
    count?: number;
    entity_type?: number;    

    constructor() {
        this.count = 0;
        this.entity_type = Entities.Movies;
    }
}
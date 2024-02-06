import { Search } from '../models/search';
import { Entities } from '../enums/entities.enum';

export const Searches: Array<Search> = [
    {
        term: "Majili",
        count: 1,
        entity_type: Entities.Movies
    },
    {
        term: "Shazam",
        count: 1,
        entity_type: Entities.Movies
    },
    {
        term: "Chitralahari",
        count: 1,
        entity_type: Entities.Movies
    },
    {
        term: "Luka Chuppi",
        count: 1,
        entity_type: Entities.Movies
    }
]
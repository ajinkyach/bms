import { Pipe, PipeTransform } from '@angular/core';
import * as moment from "moment-timezone";

@Pipe({ name: 'releaseDate' })
export class ReleaseDatePipe implements PipeTransform {
    transform(value: string) {        
        if(value) {
            return moment.utc(value).format("DD MMMM, YYYY");
        }
    }
}
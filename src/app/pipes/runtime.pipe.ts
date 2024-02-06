import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'runtime' })
export class RuntimePipe implements PipeTransform {
    transform(mins: number) {
        if (mins) {
            let hours = Math.floor(mins / 60);
            let minutes = mins % 60;
            return `${hours} hrs ${minutes} mins`;
        }
    }
}
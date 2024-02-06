import { Injectable } from '@angular/core';

@Injectable()
export class Helper {

    getImageSource(name: string, type: number, orientation?: number) {
        let src = "";
        switch(type) {
            case 1: {               
                if(orientation) {
                    src = `assets/movies/${name.split(".")[0]}/vertical/${name}`;
                }
                else {
                    src = `assets/movies/${name.split(".")[0]}/header/${name}`;
                }
                break;
            }
            case 2: {
                src = `assets/actors/${name}`;
                break;
            }
            default: {
                src = 'assets/defaults/vertical-noimg';
            }
        }
        return src;
    }

}

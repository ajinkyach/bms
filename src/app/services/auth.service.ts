import { Injectable } from '@angular/core';

import { User } from '../models/user';

@Injectable()
export class AuthService {

    constructor() { }

    saveUser(_user: any) {
        // User
        localStorage.removeItem('loggedInUser');        
        localStorage.setItem('loggedInUser', JSON.stringify(_user));
    }

    getUser() {       
        return JSON.parse(localStorage.getItem('loggedInUser'));;
    }

    clearStorage() {     
        localStorage.removeItem("loggedInUser");         
        //localStorage.clear();
    }

    checkIfLoggedIn() {
        var user = this.getUser();
        if (user && user.id > 0) {
            return true;
        }
        return false;
    }
}

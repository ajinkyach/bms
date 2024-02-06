import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

import { User } from '../../models/user';

@Injectable()
export class LoginService {

    constructor(private _http: HttpClient) {

    }

    async login(email: string, password: string) {
        return await this._http.get<Array<User>>("api/users/")
        .pipe(
            map((users) => {
                users = users.filter((user) => {
                    return user.email == email && user.password == password;
                })
                return users;
            })
        )
        .toPromise();
    }

}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NgxPermissionsService } from 'ngx-permissions';

import { LoginService } from './login.service';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    providers: [LoginService]
})
export class LoginComponent implements OnInit {

    email: string;
    password: string;
    validate: boolean = false;
    isNotValidCredentials: boolean = false;

    constructor(private _loginService: LoginService, 
        private _authService: AuthService,
        private _permissionsService: NgxPermissionsService) {

    }

    ngOnInit() {

    }

    async login(form: NgForm) {
        this.validate = true;
        this.isNotValidCredentials = false;
        if (form.valid) {
            try {
                let result = await this._loginService.login(this.email, this.password);
                this._permissionsService.flushPermissions();
                if (result.length) {                    
                    this._authService.saveUser(result[0]);
                    this._permissionsService.addPermission(['AUTHENTICATED']);
                }
                else {
                    this.isNotValidCredentials = true;                    
                }
                this.validate = true;
            }
            catch (ex) {
                this._permissionsService.flushPermissions();
            }
        }
    }

}

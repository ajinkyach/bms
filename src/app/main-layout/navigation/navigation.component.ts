import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { NgxPermissionsService } from 'ngx-permissions';

import { LoginComponent } from '../../views/login/login.component';

import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css'],
    entryComponents: [LoginComponent]
})
export class NavigationComponent implements OnInit {
    loggedInUser = new User();
    modalRef: BsModalRef;
    isLoggedIn: boolean = false;

    constructor(private _authService: AuthService,
        private _router: Router,
        private _permissionService: NgxPermissionsService,
        private _modalService: BsModalService) {
        this._permissionService.permissions$.subscribe((data) => {
            if (data["AUTHENTICATED"]) {
                setTimeout(() => {
                    this.loggedInUser = this._authService.getUser();    
                    if(this.modalRef) {
                        this.modalRef.hide();
                    }                
                }, 100)
            }
            else {
                this.loggedInUser = new User();
            }                      
        })

    }

    ngOnInit() {

    }

    openLogin(template: any) {
        this.modalRef = this._modalService.show(template);
    }

    profile() {

    }

    logout() {
        this._authService.clearStorage();
        this.loggedInUser = new User();
        this._permissionService.flushPermissions();
        this._router.navigate(["/"])
    }

}

import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { NgxPermissionsService } from 'ngx-permissions';

import { environment } from '../../environments/environment';
import { AuthService } from '../services/auth.service';

@Injectable()
export class InterceptedHttp implements HttpInterceptor {
    
    constructor(private _auth: AuthService, private _permissionService: NgxPermissionsService) { 

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        var url = req.url;
        const _req = req.clone({ url: environment.api_url + url });
        return next.handle(_req)
            .pipe(
                map((event: HttpEvent<any>) => {
                    if (event instanceof HttpResponse) {

                    }
                    return event;
                }),
                catchError((error: HttpErrorResponse) => {
                    if (error.status == 401) {
                        this._auth.clearStorage();
                        this._permissionService.flushPermissions();
                    }
                    return throwError(error);
                }));
    }
}

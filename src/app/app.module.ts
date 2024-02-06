import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { RouterModule } from '@angular/router';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgxPermissionsService, NgxPermissionsModule } from 'ngx-permissions';

import { AppRoutingModule } from './app-routing.module';
import { NavigationModule } from './main-layout/navigation/navigation.module';
import { FooterComponent } from './main-layout/footer/footer.component';
import { SharedModule } from './shared/shared.module';
import { HttpInterceptorModule } from './interceptors/http.interceptor.module';

import { AppComponent } from './app.component';

import { WebApiService } from "./services/web-api.service";
import { AuthService } from './services/auth.service';
import { BookingService } from './services/bookings.service';
import { PaymentGuard } from './guards/payment.guard';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    InMemoryWebApiModule.forRoot(WebApiService, { delay: 1000 }),
    NgxPermissionsModule.forRoot(),
    HttpInterceptorModule,
    NavigationModule,
    SharedModule
  ],
  providers: [AuthService, WebApiService, BookingService, PaymentGuard,
    {
			provide: APP_INITIALIZER,
			useFactory: (as: AuthService, ps: NgxPermissionsService) =>
				function() {
          let user = as.getUser();
          if(user && user.id > 0) {
            as.saveUser(user);
            ps.flushPermissions();
            return ps.addPermission([ 'AUTHENTICATED' ]);
          }
					else {
            return ps.addPermission([]);
          }
				},
			deps: [ AuthService, NgxPermissionsService ],
			multi: true
		}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

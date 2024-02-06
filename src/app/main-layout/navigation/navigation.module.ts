import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgxPermissionsModule } from 'ngx-permissions';

import { NavigationComponent } from './navigation.component';
import { LoginComponent } from '../../views/login/login.component';

import { NgxBootstrapModule } from '../../shared/ngx-bootstrap.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgxPermissionsModule.forChild(),
    NgxBootstrapModule
  ],
  declarations: [
    NavigationComponent,
    LoginComponent
  ],
  exports: [
    NavigationComponent,
    LoginComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: []
})
export class NavigationModule {

}

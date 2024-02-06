import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { NgxBootstrapModule } from '../../shared/ngx-bootstrap.module';

import { ProfileComponent } from './profile.component';

@NgModule({
	declarations: [
		ProfileComponent
	],
	imports: [
		ProfileRoutingModule, 
		SharedModule,
		NgxBootstrapModule
	],
	providers: [],
	exports: [
		RouterModule
	]
})
export class ProfileModule { }

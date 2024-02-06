import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ViewsRoutingModule } from './views-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NgxBootstrapModule } from '../shared/ngx-bootstrap.module';

import { ViewsComponent } from './views.component';

@NgModule({
	declarations: [
		ViewsComponent
	],
	imports: [
		ViewsRoutingModule, 
		SharedModule,
		NgxBootstrapModule
	],
	providers: [],
	exports: [
		RouterModule
	]
})
export class ViewsModule { }

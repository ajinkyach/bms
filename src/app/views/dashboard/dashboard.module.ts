import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { NgxBootstrapModule } from '../../shared/ngx-bootstrap.module';

import { DashboardComponent } from './dashboard.component';
import { DashboardService } from './dashboard.service';

@NgModule({
	declarations: [
		DashboardComponent
	],
	imports: [
		DashboardRoutingModule, 
		SharedModule,
		NgxBootstrapModule
	],
	providers: [DashboardService],
	exports: [
		RouterModule
	]
})
export class DashboardModule { }

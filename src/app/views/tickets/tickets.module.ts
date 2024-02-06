import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TicketsRoutingModule } from './tickets-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { NgxBootstrapModule } from '../../shared/ngx-bootstrap.module';

import { TicketsComponent } from './tickets.component';
import { TicketsService } from './tickets.service';

@NgModule({
	declarations: [
		TicketsComponent
	],
	imports: [
		TicketsRoutingModule, 
		SharedModule,
		NgxBootstrapModule
	],
	providers: [TicketsService],
	exports: [
		RouterModule
	]
})
export class TicketsModule { }

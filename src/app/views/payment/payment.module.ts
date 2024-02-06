import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PaymentRoutingModule } from './payment-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { NgxBootstrapModule } from '../../shared/ngx-bootstrap.module';

import { PaymentComponent } from './payment.component';
import { PaymentService } from './payment.service';

@NgModule({
	declarations: [
		PaymentComponent
	],
	imports: [
		PaymentRoutingModule, 
		SharedModule,
		NgxBootstrapModule
	],
	providers: [PaymentService],
	exports: [
		RouterModule
	]
})
export class PaymentModule { }

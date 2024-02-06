import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentComponent } from './payment.component';
import { PaymentGuard } from '../../guards/payment.guard';

const routes: Routes = [
  {
    path: "", component: PaymentComponent, canActivate: [PaymentGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewsComponent } from './views.component';
import { PaymentGuard } from '../guards/payment.guard';
import { NgxPermissionsGuard } from 'ngx-permissions';

const routes: Routes = [
  {
    path: "", component: ViewsComponent,
    children: [      
      {
        path: "", 
        loadChildren: "./dashboard/dashboard.module#DashboardModule"
      },
      {
        path: "movie/:id/:name", 
        loadChildren: "./movie/movie.module#MovieModule"
      },
      {
        path: "buytickets/:id/:name/:date", 
        loadChildren: "./tickets/tickets.module#TicketsModule"
      },
      {
        path: "payment", 
        loadChildren: "./payment/payment.module#PaymentModule",
        canLoad: [PaymentGuard]
      },
      {
        path: "profile", 
        loadChildren: "./profile/profile.module#ProfileModule",
        data: {
          permissions: {
            only: ['AUTHENTICATED'],
            redirectTo: "/"
          }
        },
        canLoad: [NgxPermissionsGuard]
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }

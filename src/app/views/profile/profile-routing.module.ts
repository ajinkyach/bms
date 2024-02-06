import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { NgxPermissionsGuard } from 'ngx-permissions';

const routes: Routes = [
  {
    path: "", component: ProfileComponent,
    data: {
        permissions: {
          only: ['AUTHENTICATED'],
          redirectTo: "/"
        }
      },
      canActivate: [NgxPermissionsGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }

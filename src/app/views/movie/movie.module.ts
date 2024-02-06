import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MovieRoutingModule } from './movie-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { NgxBootstrapModule } from '../../shared/ngx-bootstrap.module';

import { MovieComponent } from './movie.component';
import { MovieService } from './movie.service';

@NgModule({
	declarations: [
		MovieComponent
	],
	imports: [
		MovieRoutingModule, 
		SharedModule,
		NgxBootstrapModule
	],
	providers: [MovieService],
	exports: [
		RouterModule
	]
})
export class MovieModule { }

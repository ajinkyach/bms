import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxPermissionsModule } from 'ngx-permissions';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { CarouselComponent } from './components/carousel/carousel.component';

import { Helper } from '../services/helper.service';
import { RuntimePipe } from '../pipes/runtime.pipe';
import { TextAsHTMLPipe } from '../pipes/text-as-html.pipe';
import { ReleaseDatePipe } from '../pipes/release-date.pipe';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgxPermissionsModule,
        SlickCarouselModule
    ],
    declarations: [
        CarouselComponent,
        RuntimePipe,
        TextAsHTMLPipe,
        ReleaseDatePipe
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgxPermissionsModule,
        SlickCarouselModule,
        CarouselComponent,
        RuntimePipe,
        TextAsHTMLPipe,
        ReleaseDatePipe
    ],
    providers: [
        Helper
    ],
    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }

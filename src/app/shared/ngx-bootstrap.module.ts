import { NgModule } from '@angular/core';

import { CarouselModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
  imports: [
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    PopoverModule.forRoot(),
    TabsModule.forRoot()
  ],
  declarations: [

  ],
  exports: [
    CarouselModule,
    ModalModule,
    PopoverModule,
    TabsModule
  ],
  providers: [
    
  ],
  schemas: []
})
export class NgxBootstrapModule { }

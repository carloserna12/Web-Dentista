import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { BiographyComponent } from './biography/biography.component';
import { CarouselComponent } from '../home/componentsHome/carousel/carousel.component';



@NgModule({
  declarations: [
    ServicesComponent,
    ContactComponent,
    BiographyComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    CarouselComponent,
    
  ]
})
export class PagesModule { }
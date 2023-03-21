import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { PrincipalViewHomeComponent } from './principal-view-home/principal-view-home.component';
import { CarouselComponent } from './componentsHome/carousel/carousel.component';


@NgModule({
  declarations: [
    PrincipalViewHomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselComponent,
  ]
})
export class HomeModule { }

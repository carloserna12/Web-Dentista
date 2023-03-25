import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BibliographyRoutingModule } from './bibliography-routing.module';
import { BibliografiaComponent } from './bibliografia/bibliografia.component';


@NgModule({
  declarations: [
    BibliografiaComponent
  ],
  imports: [
    CommonModule,
    BibliographyRoutingModule
  ]
})
export class BibliographyModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentosLegalesRoutingModule } from './documentos-legales-routing.module';
import { AvisoLegalComponent } from './aviso-legal/aviso-legal.component';
import { PrivacidadComponent } from './privacidad/privacidad.component';
import { CookiesComponent } from './cookies/cookies.component';


@NgModule({
  declarations: [
    AvisoLegalComponent,
    PrivacidadComponent,
    CookiesComponent
  ],
  imports: [
    CommonModule,
    DocumentosLegalesRoutingModule
  ]
})
export class DocumentosLegalesModule { }

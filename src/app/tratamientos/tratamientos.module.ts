import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TratamientosRoutingModule } from './tratamientos-routing.module';
import { ListaTratamientosComponent } from './lista-tratamientos/lista-tratamientos.component';
import { AgregarTratamientosComponent } from './agregar-tratamientos/agregar-tratamientos.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    ListaTratamientosComponent,
    AgregarTratamientosComponent
  ],
  imports: [
    CommonModule,
    TratamientosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class TratamientosModule { }

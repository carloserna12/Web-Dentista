import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarTratamientosComponent } from './agregar-tratamientos/agregar-tratamientos.component';
import { ListaTratamientosComponent } from './lista-tratamientos/lista-tratamientos.component';


const routes: Routes = [{
  path:'',
  children:[
      {path:'add',component:AgregarTratamientosComponent},
      {path:'trat',component:ListaTratamientosComponent},
      {path:'**',redirectTo:'principal'},
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TratamientosRoutingModule { }

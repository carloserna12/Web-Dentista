import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvisoLegalComponent } from './aviso-legal/aviso-legal.component';
import { CookiesComponent } from './cookies/cookies.component';
import { PrivacidadComponent } from './privacidad/privacidad.component';

const routes: Routes = [{
  path:'',
  children:[
      {path:'avisoLegal',component:AvisoLegalComponent},
      {path:'privacidad',component:PrivacidadComponent},
      {path:'cookies',component:CookiesComponent},
      {path:'**',redirectTo:'principal'},
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentosLegalesRoutingModule { }

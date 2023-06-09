import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'home',loadChildren:()=> import('./home/home.module').then(m=>m.HomeModule)
  },
  {
    path:'contact',loadChildren:()=> import('./contact/contact.module').then(m=>m.ContactModule)
  },
  {
    path:'tratamientos',loadChildren:()=> import('./tratamientos/tratamientos.module').then(m=>m.TratamientosModule)
  },
  {
    path:'legalidad',loadChildren:()=> import('./documentos-legales/documentos-legales.module').then(m=>m.DocumentosLegalesModule)
  },
  {
    path:'bibliografia',loadChildren:()=> import('./bibliography/bibliography.module').then(m=>m.BibliographyModule)
  },
  {
    path:'**',redirectTo:'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

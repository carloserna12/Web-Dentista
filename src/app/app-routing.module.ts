import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'home',loadChildren:()=> import('./home/home.module').then(m=>m.HomeModule)
  },
  {
    path:'pages',loadChildren:()=> import('./pages/pages.module').then(m=>m.PagesModule)
  },
  {
    path:'contact',loadChildren:()=> import('./contact/contact.module').then(m=>m.ContactModule)
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

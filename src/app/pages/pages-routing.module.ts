import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BiographyComponent } from './biography/biography.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [{
  path:'',
  children:[
      {path:'services',component:ServicesComponent},
      {path:'contact',component:ContactComponent},
      {path:'biography',component:BiographyComponent},
      {path:'**',redirectTo:'services'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

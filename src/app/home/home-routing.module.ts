import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalViewHomeComponent } from './principal-view-home/principal-view-home.component';

const routes: Routes = [{
  path:'',
  children:[
      {path:'',component:PrincipalViewHomeComponent},
      {path:'**',redirectTo:'principal'},
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

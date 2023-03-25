import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BibliografiaComponent } from './bibliografia/bibliografia.component';
import { BibliographyModule } from './bibliography.module';

const routes: Routes = [{
  path:'',
  children:[
      {path:'bi',component:BibliografiaComponent},
      {path:'**',redirectTo:'principal'},
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BibliographyRoutingModule { }

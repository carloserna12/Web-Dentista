import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsFormComponent } from './contacts-form/contacts-form.component';

const routes: Routes = [{
  path:'',
  children:[
      {path:'',component:ContactsFormComponent},
      {path:'**',redirectTo:'principal'},
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }

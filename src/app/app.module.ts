import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { CarouselComponent } from './pages/home/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    
    
    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    //CarouselComponent,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}

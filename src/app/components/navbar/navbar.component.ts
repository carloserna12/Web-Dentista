import { Component, ViewChild, ElementRef,AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @ViewChild('myCheckbox') myCheckbox: any;

  toggleCheckbox() {
    this.myCheckbox.nativeElement.checked = !this.myCheckbox.nativeElement.checked;
  }


}
  
  

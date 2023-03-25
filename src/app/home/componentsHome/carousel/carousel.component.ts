import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [NgbCarouselModule, NgIf],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  
  images = [
  `https://img.freepik.com/free-photo/dentists-treat-patients-teeth_1150-19648.jpg?w=826&t=st=1679696326~exp=1679696926~hmac=4323cc1e5355751157374a1e95d6f1fc28e0930841c90a5ee1405cfcbf8a984e`,
  `https://img.freepik.com/free-photo/young-female-patient-visiting-dentist-office_496169-930.jpg?w=740&t=st=1679698089~exp=1679698689~hmac=c2708e89c28a438666cd769df0273a8e4d750d8aceb2012e923a8538ee1abc06`,
  `https://img.freepik.com/free-photo/x-ray-teeth_1303-9353.jpg?w=740&t=st=1679698117~exp=1679698717~hmac=273f848ed66481114b949ca39a2651815d677355f3559e68367850f3e641cf27`];

  
}

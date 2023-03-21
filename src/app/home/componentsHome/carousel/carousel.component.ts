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
  
  images = [`https://picsum.photos/id/1/1420/500`,`https://picsum.photos/id/2/1420/500`,`https://picsum.photos/id/3/1420/500`];

  
}

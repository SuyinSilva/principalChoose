import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
  <swiper-container>
    <swiper-slide><div class="slide-custom"></div>Slide 1</swiper-slide>
    <swiper-slide><div class="slide-custom"></div>Slide 2</swiper-slide>
    <swiper-slide><div class="slide-custom"></div>Slide 3</swiper-slide>
  </swiper-container>
  `,
  styleUrls: ['./carousel.component.scss'],  
  changeDetection:ChangeDetectionStrategy.OnPush,
}) 
export class CarouselComponent  {

}

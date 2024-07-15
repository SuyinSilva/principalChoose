import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselComponent } from '../carousel/carousel.component';
@Component({
  selector: 'app-panel-servicio',
  standalone: true,
  imports: [ RouterLink,CarouselComponent],
  templateUrl: './panel-servicio.component.html',
  styleUrl: './panel-servicio.component.css'
})
export class PanelServicioComponent {

}

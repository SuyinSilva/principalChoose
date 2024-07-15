import { Component } from '@angular/core';
import { NavegacionComponent } from '../navegacion/navegacion.component';
import { PanelFooterComponent } from '../panel-footer/panel-footer.component';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [NavegacionComponent,PanelFooterComponent],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent {

}

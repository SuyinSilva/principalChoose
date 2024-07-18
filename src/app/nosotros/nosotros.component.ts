import { Component } from '@angular/core';
import { NavegacionComponent } from '../navegacion/navegacion.component';
import { PanelFooterComponent } from '../panel-footer/panel-footer.component';
import { NuestroEquipoComponent } from "../nuestro-equipo/nuestro-equipo.component";
import { PilaresComponent } from '../pilares/pilares.component';
import { ValoresComponent } from "../valores/valores.component";

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [NavegacionComponent, PanelFooterComponent, NuestroEquipoComponent, PilaresComponent, ValoresComponent],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent {

}

import { Component } from '@angular/core';
import { NavegacionComponent } from '../navegacion/navegacion.component';
import { MaquinaEscribirComponent } from '../maquina-escribir/maquina-escribir.component';
import { PanelFooterComponent } from "../panel-footer/panel-footer.component";
import { PanelServicioComponent } from '../panel-servicio/panel-servicio.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [NavegacionComponent, PanelServicioComponent,PanelFooterComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}

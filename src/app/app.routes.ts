import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PanelBusquedaComponent } from './panel-busqueda/panel-busqueda.component';
import { PanelContactoComponent } from './panel-contacto/panel-contacto.component';
import { PanelServicioComponent } from './panel-servicio/panel-servicio.component';
import { PanelNosotrosComponent } from './panel-nosotros/panel-nosotros.component';
import { NosotrosComponent } from './nosotros/nosotros.component';


export const routes: Routes = [
    {path:'', component:NosotrosComponent}
];

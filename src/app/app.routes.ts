import { Routes } from '@angular/router';
import { Inicio } from './MainContent/inicio/inicio';
import { NuevoHotel } from './Nuevo/nuevo-hotel/nuevo-hotel';
import { ListadoHotel } from './Listado/listado-hotel/listado-hotel';
import { NuevoVuelo } from './Nuevo/nuevo-vuelo/nuevo-vuelo';
import { ListadoVuelo } from './Listado/listado-vuelo/listado-vuelo';
import { NuevoCliente } from './Nuevo/nuevo-cliente/nuevo-cliente';
import { ListadoCliente } from './Listado/listado-cliente/listado-cliente';
import { NuevoReservacionHotel } from './Nuevo/nuevo-reservacionhotel/nuevo-reservacionhotel';
import { ListadoReservacionHotel } from './Listado/listado-reservacionhotel/listado-reservacionhotel';
import { NuevoReservacionVuelo } from './Nuevo/nuevo-reservacionvuelo/nuevo-reservacionvuelo';
import { ListadoReservacionVuelo } from './Listado/listado-reservacionvuelo/listado-reservacionvuelo';

export const routes: Routes = [
  { path: '', component: Inicio },
  { path: 'hotel/nuevo', component: NuevoHotel },
  { path: 'hotel/listado', component: ListadoHotel },
  { path: 'vuelo/nuevo', component: NuevoVuelo },
  { path: 'vuelo/listado', component: ListadoVuelo },
  { path: 'cliente/nuevo', component: NuevoCliente },
  { path: 'cliente/listado', component: ListadoCliente },
  { path: 'reservacionhotel/nuevo', component: NuevoReservacionHotel },
  { path: 'reservacionhotel/listado', component: ListadoReservacionHotel },
  { path: 'reservacionvuelo/nuevo', component: NuevoReservacionVuelo },
  { path: 'reservacionvuelo/listado', component: ListadoReservacionVuelo },
  { path: '**', redirectTo: '' }
];

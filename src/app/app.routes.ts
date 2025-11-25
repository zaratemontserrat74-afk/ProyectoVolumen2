import { Routes } from '@angular/router';
import { Inicio } from './MainContent/inicio/inicio';
import { NuevoHotel } from './Nuevo/nuevo-hotel/nuevo-hotel';//nuevo.ts
import { ListadoHotel } from './Listado/listado-hotel/listado-hotel';//listado.ts
import { NuevoVuelo } from './Nuevo/nuevo-vuelo/nuevo-vuelo';//nuevo.ts
import { ListadoVuelo } from './Listado/listado-vuelo/listado-vuelo';//listado.ts
import { NuevoCliente } from './Nuevo/nuevo-cliente/nuevo-cliente';//nuevo.ts
import { ListadoCliente } from './Listado/listado-cliente/listado-cliente';//listado.ts
import { NuevoReservacionHotel } from './Nuevo/nuevo-reservacionhotel/nuevo-reservacionhotel';//nuevo.ts
import { ListadoReservacionHotel } from './Listado/listado-reservacionhotel/listado-reservacionhotel';//listado.ts
import { NuevoReservacionVuelo } from './Nuevo/nuevo-reservacionvuelo/nuevo-reservacionvuelo';//nuevo.ts
import { ListadoReservacionVuelo } from './Listado/listado-reservacionvuelo/listado-reservacionvuelo';//listado.ts

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

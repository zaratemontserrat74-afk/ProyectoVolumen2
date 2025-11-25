import { Component, OnInit, signal } from '@angular/core';
import { Vuelo } from '../../Models/vuelo.model/vuelo.model';
import { VueloService } from '../../Services/vuelo-service/vuelo-service';

@Component({
  selector: 'app-listado-vuelo',
  standalone: true,
  imports: [],
  templateUrl: './listado-vuelo.html',
  styleUrls: ['./listado-vuelo.scss']
})
export class ListadoVuelo implements OnInit {

  vuelos = signal<Vuelo[]>([]);
  cargando = signal<boolean>(true);

  constructor(private vueloService: VueloService) {}

  ngOnInit(): void {
    this.loadVuelos();
  }
  private loadVuelos() {
    this.cargando.set(true);

    this.vueloService.getAllVuelos().subscribe({
      next: (data) => {
        this.vuelos.set(data);
        this.cargando.set(false);
        console.log(this.vuelos);
      },
      error: (err) => {
        console.error("Error al cargar los vuelos", err);
        this.vuelos.set([]);
        this.cargando.set(false);
      }
    });
  }
}

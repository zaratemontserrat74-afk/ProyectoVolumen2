import { Component, OnInit, signal } from '@angular/core';
import { ReservacionVuelo } from '../../Models/reservacionvuelo.model/reservacionvuelo.model';
import { ReservacionVueloService } from '../../Services/reservacionvuelo-service/reservacionvuelo-service';

@Component({
  selector: 'app-listado-reservacionvuelo',
  standalone: true,
  imports: [],
  templateUrl: './listado-reservacionvuelo.html',
  styleUrl: './listado-reservacionvuelo.scss'
})
export class ListadoReservacionVuelo implements OnInit {

  reservacionesVuelos = signal<ReservacionVuelo[]>([]);
  cargando = signal<boolean>(true);

  constructor(private reservacionvueloService: ReservacionVueloService) { }

  ngOnInit(): void {
    this.loadReservacionesVuelos();
  }

  private loadReservacionesVuelos() {
    this.cargando.set(true);

    this.reservacionvueloService.getAllReservacionesVuelos().subscribe({
      next: (data) => {
        this.reservacionesVuelos.set(data);
        this.cargando.set(false);
        console.log(this.reservacionesVuelos);
      },
      error: (err) => {
        console.error("Error al cargar las reservaciones de vuelo", err);
        this.reservacionesVuelos.set([]);
        this.cargando.set(false);
      }
    });
  }
}

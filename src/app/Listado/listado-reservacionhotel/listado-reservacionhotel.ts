import { Component, OnInit, signal } from '@angular/core';
import { ReservacionHotel } from '../../Models/reservacionhotel.model/reservacionhotel.model';
import { ReservacionHotelService } from '../../Services/reservacionhotel-service/reservacionhotel-service';

@Component({
  selector: 'app-listado-reservacionhotel',
  standalone: true,
  imports: [],
  templateUrl: './listado-reservacionhotel.html',
  styleUrl: './listado-reservacionhotel.scss'
})
export class ListadoReservacionHotel implements OnInit {

  reservacioneshoteles = signal<ReservacionHotel[]>([]);
  cargando = signal<boolean>(true);

  constructor(private reservacionhotelService: ReservacionHotelService) { }

  ngOnInit(): void {
    this.loadReservacionesHoteles();
  }
  private loadReservacionesHoteles() {
    this.cargando.set(true);

    this.reservacionhotelService.getAllReservacionesHoteles().subscribe({
      next: (data) => {
        this.reservacioneshoteles.set(data);
        this.cargando.set(false);
        console.log(this.reservacioneshoteles);
      },
      error: (err) => {
        console.error("Error al cargar la reservacion de hotel", err);
        this.reservacioneshoteles.set([]);
        this.cargando.set(false);
      }
    });
  }
}

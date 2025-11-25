import { Component, OnInit, signal } from '@angular/core';
import { Hotel } from '../../Models/hotel.model/hotel.model';
import { HotelService } from '../../Services/hotel-service/hotel-service';

@Component({
  selector: 'app-listado-hotel',
  standalone: true,
  imports: [],
  templateUrl: './listado-hotel.html',
  styleUrls: ['./listado-hotel.scss']
})
export class ListadoHotel implements OnInit {

  hoteles = signal<Hotel[]>([]);
  cargando = signal<boolean>(true);

  constructor(private hotelService: HotelService) { }

  ngOnInit(): void {
    this.loadHoteles();
  }
  private loadHoteles() {
    this.cargando.set(true);

    this.hotelService.getAllHoteles().subscribe({
      next: (data) => {
        this.hoteles.set(data);
        this.cargando.set(false);
        console.log(this.hoteles);
      },
      error: (err) => {
        console.error("Error al cargar los hoteles", err);
        this.hoteles.set([]);
        this.cargando.set(false);
      }
    });
  }
}

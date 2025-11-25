import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReservacionVuelo } from '../../Models/reservacionvuelo.model/reservacionvuelo.model';

@Injectable({
  providedIn: 'root'
})
export class ReservacionVueloService {

  private apiURL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getAllReservacionesVuelos(): Observable<ReservacionVuelo[]> {  // Obtener todas las reservaciones de vuelos
    return this.http.get<ReservacionVuelo[]>(`${this.apiURL}/getAllReservacionesVuelos`);
  }

  getReservacionVueloById(id: number): Observable<ReservacionVuelo> { // Obtener una reservación de vuelo por su ID
    return this.http.get<ReservacionVuelo>(`${this.apiURL}/getReservacionVueloById/${id}`);
  }

  createReservacionVuelo(vuelo: ReservacionVuelo): Observable<any> {  // Agregar una nueva reservación de vuelo
    return this.http.post<any>(`${this.apiURL}/ReservacionesVuelos`, vuelo);
  }
}

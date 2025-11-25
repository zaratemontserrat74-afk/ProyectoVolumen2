import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReservacionHotel } from '../../Models/reservacionhotel.model/reservacionhotel.model';

@Injectable({
  providedIn: 'root'
})
export class ReservacionHotelService {

  private apiURL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getAllReservacionesHoteles(): Observable<ReservacionHotel[]> {  // Obtener todos las Reservacion hoteles
    return this.http.get<ReservacionHotel[]>(`${this.apiURL}/getAllReservacionesHoteles`);
  }

  getAllReservacionHotelById(id: number): Observable<ReservacionHotel> { // Obtener una Reservacion hotel por su ID
    return this.http.get<ReservacionHotel>(`${this.apiURL}/getReservacionHotelById/${id}`);
  }

  createReservacionHotel(hotel: ReservacionHotel): Observable<any> {  // Agregar un nueva Reservacion hotel
    return this.http.post<any>(`${this.apiURL}/ReservacionesHoteles`, hotel);
  }
}

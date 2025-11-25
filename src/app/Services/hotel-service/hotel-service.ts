import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hotel } from '../../Models/hotel.model/hotel.model';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  private apiURL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getAllHoteles(): Observable<Hotel[]> {  // Obtener todos los hoteles
    return this.http.get<Hotel[]>(`${this.apiURL}/getAllHoteles`);
  }

  getAllHotelById(id: number): Observable<Hotel> { // Obtener un hotel por su ID
    return this.http.get<Hotel>(`${this.apiURL}/getHotelById/${id}`);
  }

  createHotel(hotel: Hotel): Observable<any> {  // Agregar un nuevo hotel
    return this.http.post<any>(`${this.apiURL}/hoteles`, hotel);
  }
}

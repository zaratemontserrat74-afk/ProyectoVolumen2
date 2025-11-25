import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vuelo } from '../../Models/vuelo.model/vuelo.model';

@Injectable({
  providedIn: 'root'
})
export class VueloService {

  private apiURL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getAllVuelos(): Observable<Vuelo[]> { // Obtener todos los vuelos
    return this.http.get<Vuelo[]>(`${this.apiURL}/getAllVuelos`);
  }
  getAllVueloById(id: number): Observable<Vuelo> { // Obtener un vuelo por su ID
      return this.http.get<Vuelo>(`${this.apiURL}/getVueloById/${id}`);
  }
    createHotel(vuelo: Vuelo): Observable<any> {  // Agregar un nuevo vuelo
      return this.http.post<any>(`${this.apiURL}/vuelos`, vuelo);
    }
}

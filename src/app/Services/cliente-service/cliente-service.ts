import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../../Models/cliente.model/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private apiURL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getAllClientes(): Observable<Cliente[]> {  // Obtener todos los Clientes
    return this.http.get<Cliente[]>(`${this.apiURL}/getAllClientes`);
  }

  getAllClienteById(id: number): Observable<Cliente> { // Obtener un Cliente por su ID
    return this.http.get<Cliente>(`${this.apiURL}/getClienteById/${id}`);
  }

  createCliente(cliente: Cliente): Observable<any> {  // Agregar un nuevo Cliente
    return this.http.post<any>(`${this.apiURL}/clientes`, cliente);
  }
}

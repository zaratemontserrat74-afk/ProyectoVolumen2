import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Hotel } from '../../Models/hotel.model/hotel.model';
import { Cliente } from '../../Models/cliente.model/cliente.model';

@Component({
  selector: 'app-nuevo-reservacionhotel',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './nuevo-reservacionhotel.html',
  styleUrls: ['./nuevo-reservacionhotel.scss']
})

export class NuevoReservacionHotel implements OnInit {

  hoteles: Hotel[] = [];
  nombreHotel: string = "";
  hotelesFiltrados: Hotel[] = [];
  mostrarListaHoteles: boolean = false;

  clientes: Cliente[] = [];
  nombreCliente: string = "";
  clientesFiltrados: Cliente[] = [];
  mostrarListaClientes: boolean = false;

  model = {
    idHotel: 0,
    idCliente: 0,
    fechaReservacion: '',
    numeroHuespedes: '',
    numeroHabitaciones: '',
    fechaEntrada: '',
    fechaSalida: '',
    total: '',
    metodoPago: ''
  };

  private apiUrl = 'http://localhost:3000/reservacionesHotel';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadHoteles();
    this.loadClientes();
  }

  loadHoteles() {
    this.http.get('http://localhost:3000/getAllHoteles')
      .subscribe((data: any) => {
        this.hoteles = data;
        console.log('Hoteles cargados:', this.hoteles);
      });
  }

  filtrarHoteles() {
    const texto = this.nombreHotel.toLowerCase();
    this.hotelesFiltrados = this.hoteles.filter(h =>
      h.nombre.toLowerCase().includes(texto)
    );
    this.mostrarListaHoteles = true;
  }

  seleccionarHotel(h: Hotel) {
    this.nombreHotel = h.nombre;
    this.model.idHotel = h.idHotel;
    this.mostrarListaHoteles = false;
  }

  loadClientes() {
    this.http.get('http://localhost:3000/getAllClientes')
      .subscribe((data: any) => {
        this.clientes = data;
        console.log('Clientes cargados:', this.clientes);
      });
  }

  filtrarClientes() {
    const texto = this.nombreCliente.toLowerCase();
    this.clientesFiltrados = this.clientes.filter(c =>
      c.nombre.toLowerCase().includes(texto)
    );
    this.mostrarListaClientes = true;
  }

  seleccionarCliente(c: Cliente) {
    this.nombreCliente = c.nombre;
    this.model.idCliente = c.idCliente;
    this.mostrarListaClientes = false;
  }

  onSubmit(form: NgForm) {
    if (form.invalid) return;

    this.http.post(this.apiUrl, this.model).subscribe({
      next: () => {
        alert("Reservación de hotel registrada correctamente");
        form.resetForm();
      },
      error: () => {
        alert("Error al registrar");
      }
    });
  }
}

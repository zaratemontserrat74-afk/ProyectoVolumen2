import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Vuelo } from '../../Models/vuelo.model/vuelo.model';
import { Cliente } from '../../Models/cliente.model/cliente.model';

@Component({
  selector: 'app-nuevo-reservacionvuelo',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './nuevo-reservacionvuelo.html',
  styleUrls: ['./nuevo-reservacionvuelo.scss']
})

export class NuevoReservacionVuelo implements OnInit {

  // ---------- VUELOS ----------
  vuelos: Vuelo[] = [];
  textoVuelo: string = "";
  vuelosFiltrados: Vuelo[] = [];
  mostrarListaVuelos: boolean = false;

  // ---------- CLIENTES ----------
  clientes: Cliente[] = [];
  textoCliente: string = "";
  clientesFiltrados: Cliente[] = [];
  mostrarListaClientes: boolean = false;

  model = {
    idVuelo: 0,
    idCliente: 0,
    fechaReservacion: '',
    cantidadBoletos: 1,
    total: 0,
    metodoPago: ''
  };

  private apiUrl = 'http://localhost:3000/reservacionesVuelo';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadVuelos();
    this.loadClientes();
  }

  // ============ VUELOS ============
  loadVuelos() {
    this.http.get('http://localhost:3000/getAllVuelos')
      .subscribe((data: any) => {
        this.vuelos = data;
        console.log('Vuelos cargados:', this.vuelos);
      });
  }

  filtrarVuelos() {
    const texto = this.textoVuelo.toLowerCase();

    this.vuelosFiltrados = this.vuelos.filter(v =>
      v.aerolinea.toLowerCase().includes(texto) ||
      v.idVuelo.toString().includes(texto)
    );

    this.mostrarListaVuelos = true;
  }

  seleccionarVuelo(v: Vuelo) {
    this.textoVuelo = `${v.idVuelo} — ${v.aerolinea}`;
    this.model.idVuelo = v.idVuelo;
    this.mostrarListaVuelos = false;
  }

  // ============ CLIENTES ============
  loadClientes() {
    this.http.get('http://localhost:3000/getAllClientes')
      .subscribe((data: any) => {
        this.clientes = data;
        console.log('Clientes cargados:', this.clientes);
      });
  }

  filtrarClientes() {
    const texto = this.textoCliente.toLowerCase();

    this.clientesFiltrados = this.clientes.filter(c =>
      c.nombre.toLowerCase().includes(texto)
    );

    this.mostrarListaClientes = true;
  }

  seleccionarCliente(c: Cliente) {
    this.textoCliente = c.nombre;
    this.model.idCliente = c.idCliente;
    this.mostrarListaClientes = false;
  }

  // ============ GUARDAR ============
  onSubmit(form: NgForm) {
    if (form.invalid) return;

    this.http.post(this.apiUrl, this.model).subscribe({
      next: () => {
        alert("Reservación de vuelo registrada correctamente");
        form.resetForm();
      },
      error: () => {
        alert("Error al registrar");
      }
    });
  }
}

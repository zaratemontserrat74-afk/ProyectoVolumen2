import { Component, OnInit, signal } from '@angular/core';
import { Cliente } from '../../Models/cliente.model/cliente.model';
import { ClienteService } from '../../Services/cliente-service/cliente-service'

@Component({
  selector: 'app-listado-cliente',
  standalone: true,
  imports: [],
  templateUrl: './listado-cliente.html',
  styleUrls: ['./listado-cliente.scss']
})
export class ListadoCliente implements OnInit {

  clientes = signal<Cliente[]>([]);
  cargando = signal<boolean>(true);

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.loadClientes();
  }
  private loadClientes() {
    this.cargando.set(true);

    this.clienteService.getAllClientes().subscribe({
      next: (data) => {
        this.clientes.set(data);
        this.cargando.set(false);
        console.log(this.clientes);
      },
      error: (err) => {
        console.error("Error al cargar los clientes", err);
        this.clientes.set([]);
        this.cargando.set(false);
      }
    });
  }
}

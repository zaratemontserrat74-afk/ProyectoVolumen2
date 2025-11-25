import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-nuevo-cliente',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './nuevo-cliente.html',
  styleUrls: ['./nuevo-cliente.scss']
})
export class NuevoCliente {
  model = {
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    fechaNacimiento: '',
    telefono: '',
    correo: '',
    fechaRegistro: ''
  };

  private apiUrl = 'http://localhost:3000/clientes'; // URL para crear clientes

  constructor(private http: HttpClient) { }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.http.post(this.apiUrl, this.model).subscribe({
      next: () => {
        console.log("Cliente agregado de manera exitosa!");
        alert("Cliente agregado de manera exitosa");
        form.resetForm();
      },

      error: (err) => {
        console.log("Transacción fallida!");
        alert("Transacción fallida!");
      }
    });
  }
}

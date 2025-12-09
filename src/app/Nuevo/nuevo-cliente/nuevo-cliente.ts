import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nuevo-cliente',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
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

  private apiUrl = 'http://localhost:3000/clientes';
  isLoading = false;

  constructor(private http: HttpClient) { }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      Object.keys(form.controls).forEach(key => {
        form.controls[key].markAsTouched();
      });
      return;
    }

    this.isLoading = true;

    this.http.post(this.apiUrl, this.model).subscribe({
      next: (response) => {
        console.log("Cliente agregado exitosamente!", response);
        alert("Cliente agregado de manera exitosa");
        form.resetForm();
        this.isLoading = false;
      },
      error: (err) => {
        console.error("Error al agregar cliente", err);
        alert("Error al agregar cliente. Intente nuevamente.");
        this.isLoading = false;
      }
    });
  }
}

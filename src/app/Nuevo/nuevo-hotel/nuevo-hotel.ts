import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nuevo-hotel',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './nuevo-hotel.html',
  styleUrls: ['./nuevo-hotel.scss']
})
export class NuevoHotel {
  model = {
    nombre: '',
    pais: '',
    ciudad: '',
    estrellas: 0,
    precioNoche: '',
    tipoHabitacion: '',
    descripcion: ''
  };

  private apiUrl = 'http://localhost:3000/hoteles';
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
        console.log("Hotel agregado de manera exitosa!", response);
        alert("Hotel agregado de manera exitosa");
        form.resetForm();
        this.isLoading = false;
      },
      error: (err) => {
        console.error("Error al agregar hotel", err);
        alert("Error al agregar hotel. Intente nuevamente.");
        this.isLoading = false;
      }
    });
  }
}

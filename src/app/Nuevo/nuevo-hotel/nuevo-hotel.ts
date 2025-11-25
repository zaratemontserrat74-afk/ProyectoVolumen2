import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-nuevo-hotel',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './nuevo-hotel.html',
  styleUrls: ['./nuevo-hotel.scss']
})
export class NuevoHotel {
  model = {
    nombre: '',
    pais: '',
    ciudad: '',
    estrellas: 0,
    precioNoche: 0,
    tipoHabitacion: '',
    descripcion: ''
  };

  private apiUrl = 'http://localhost:3000/hoteles'; // URL para crear hoteles

  constructor(private http: HttpClient) { }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.http.post(this.apiUrl, this.model).subscribe({
      next: () => {
        console.log("Hotel agregado de manera exitosa!");
        alert("Hotel agregado de manera exitosa");
        form.resetForm();
      },

      error: (err) => {
        console.log("Transacción fallida!");
        alert("Transacción fallida!");
      }
    });
  }
}

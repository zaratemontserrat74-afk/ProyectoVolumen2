import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nuevo-vuelo',
  standalone: true,
  imports: [FormsModule, HttpClientModule,CommonModule],
  templateUrl: './nuevo-vuelo.html',
  styleUrls: ['./nuevo-vuelo.scss']
})
export class NuevoVuelo {
  model = {
    aerolinea: '',
    origen: '',
    destino: '',
    fechaSalida: '',
    horaSalida: '',
    fechaLlegada: '',
    horaLlegada: '',
    duracion: '',
    precioBoleto: '',
    asientosTotales: '',
    clase: ''
  };

  private apiUrl = 'http://localhost:3000/vuelos';
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
        console.log("Vuelo agregado de manera exitosa!", response);
        alert("Vuelo agregado de manera exitosa");
        form.resetForm();
        this.isLoading = false;
      },

      error: (err) => {
        console.error("Transacción fallida!", err);
        alert("Transacción fallida!");
        this.isLoading = false;

      }
    });
  }
}

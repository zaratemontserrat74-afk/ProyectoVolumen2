import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nuevo-vuelo',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
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
    precioBoleto: 0,
    asientosTotales: 0,
    clase: ''
  };

  private apiUrl = 'http://localhost:3000/vuelos'; // URL para crear vuelos

  constructor(private http: HttpClient) { }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.http.post(this.apiUrl, this.model).subscribe({
      next: () => {
        console.log("Vuelo agregado de manera exitosa!");
        alert("Vuelo agregado de manera exitosa");
        form.resetForm();
      },

      error: (err) => {
        console.log("Transacción fallida!");
        alert("Transacción fallida!");
      }
    });
  }
}

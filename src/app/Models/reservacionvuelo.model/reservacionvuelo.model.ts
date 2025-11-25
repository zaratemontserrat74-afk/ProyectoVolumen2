export interface ReservacionVuelo {
  idReservacionVuelo: number;
  idVuelo: number;
  idCliente: number;
  fechaReservacion: string;
  cantidadBoletos: number;
  total: number;
  metodoPago: string;
}

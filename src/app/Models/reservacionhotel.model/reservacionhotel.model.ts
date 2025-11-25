export interface ReservacionHotel {
  idReservacionHotel: number;
  idHotel: number;
  idCliente: number;
  fechaReservacion: string;
  numeroHuespedes: number;
  numeroHabitaciones: number;
  fechaEntrada: string;
  fechaSalida: string;
  total: number;
  metodoPago: string;
}

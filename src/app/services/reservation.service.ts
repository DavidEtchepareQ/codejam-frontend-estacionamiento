import { Injectable } from '@angular/core';
import { RESERVATIONS } from '../fake-data/reservations';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {


    constructor() { }

    getActual() {
        const today = new Date();
        return RESERVATIONS.filter(reservation => new Date(reservation.fecha_reserva) >= today);
    }

    getHistorical() {
        return RESERVATIONS;
    }
}

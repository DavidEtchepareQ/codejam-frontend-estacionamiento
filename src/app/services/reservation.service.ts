import { Injectable } from '@angular/core';
import { RESERVATIONS } from '../fake-data/reservations';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {


    constructor() { }

    getActual() {
        return RESERVATIONS;
    }

    getHistorical() {
        return RESERVATIONS;
    }
}

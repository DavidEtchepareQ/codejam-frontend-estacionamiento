import { Component } from '@angular/core';
import { ReservationService } from '../../../../services/reservation.service';

@Component({
    selector: 'app-historic-reservations',
    templateUrl: './historic-reservations.component.html',
    styleUrl: './historic-reservations.component.scss'
})
export class HistoricReservationsComponent {
    public reservations = [];

    public loading = {
        reservations: true
    }

    constructor(
        private _reservationService: ReservationService,
    ) { }

    ngOnInit(): void {
        this.getData();
    }

    getData() {
        this.loading.reservations = true;
        setTimeout(() => {
            this.reservations = this._reservationService.getHistorical();
            this.loading.reservations = false;
        }, 1000);
    }


}

import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../../../../services/reservation.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-actual-reservation',
    templateUrl: './actual-reservation.component.html',
    styleUrl: './actual-reservation.component.scss'
})
export class ActualReservationComponent implements OnInit {

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
            this.reservations = this._reservationService.getActual();
            this.loading.reservations = false;
        }, 1000);
    }

    cancel(reservation) {
        Swal.fire({
            title: '¿Estás seguro?',
            text: `Estás a punto de cancelar la reserva.`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: '¡Si!',
            cancelButtonText: 'Cancelar',
            reverseButtons: true
        }).then(status => {
            if (status.value) {
                Swal.fire({ title: 'Cancelando reserva...', allowOutsideClick: false });
                Swal.showLoading();

                setTimeout(() => {
                    // TODO: Implementar API
                    Swal.close();
                    Swal.fire({
                        title: '¡Reservado!',
                        text: 'La reserva ha sido cancelada exitosamente',
                        icon: 'success',
                        showCancelButton: false,
                        confirmButtonText: 'Cerrar'
                    });
                }, 1000);
            }
        });
    }

}

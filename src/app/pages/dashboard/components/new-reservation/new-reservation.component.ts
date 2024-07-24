import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import moment from 'moment';

@Component({
    selector: 'app-new-reservation',
    templateUrl: './new-reservation.component.html',
    styleUrl: './new-reservation.component.scss'
})
export class NewReservationComponent {

    public calendar = inject(NgbCalendar);

    public form: FormGroup;

    public periods = [
        { value: 1, text: 'Sólo mañana', description: '8:00 a 14:00' },
        { value: 2, text: 'Sólo tarde', description: '14:00 a 20:00' },
        { value: 3, text: 'Día completo', description: '8:00 a 20:00' },
    ];

    private today = new Date();

    constructor(
        private _formBuilder: FormBuilder
    ) { }

    ngOnInit() {
        this.initForm()
    }

    initForm() {
        this.form = this._formBuilder.group({
            date: [this.calendar.getToday(), [Validators.required]],
            period: [3, [Validators.required]]
        });
    }

    selectPeriod(period) {
        this.form.get('period').setValue(period.value)
    }

    disabledDates = (date: NgbDateStruct, current: any) => {
        const dateToCheck = new Date(date.year, date.month - 1, date.day);
        if (dateToCheck.getDay() == 0 || dateToCheck.getDay() == 6) return true;
        if (dateToCheck < new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate())) return true;
        if (this.today.getDate() == dateToCheck.getDate()) return false;
        return false;
    }

    transformDateStructToDate = (date: NgbDateStruct) => {
        return moment(new Date(date.year, date.month - 1, date.day));
    }

    submit() {
        const date = this.transformDateStructToDate(this.form.value.date).format('DD-MM-YYYY')
        const period = this.periods.find(period => period.value == this.form.value.period).description

        Swal.fire({
            title: '¿Estás seguro?',
            text: `Estás a punto de reservar el día ${date} para el horario ${period}`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: '¡Si!',
            cancelButtonText: 'Cancelar',
            reverseButtons: true
        }).then(status => {
            if (status.value) {
                Swal.fire({ title: 'Reservando...', allowOutsideClick: false });
                Swal.showLoading();

                setTimeout(() => {
                    // TODO: Implementar API
                    Swal.close();
                    Swal.fire({
                        title: '¡Reservado!',
                        text: 'La reserva ha sido creada exitosamente, el estacionamiento asignado es XXX',
                        icon: 'success',
                        showCancelButton: false,
                        confirmButtonText: 'Cerrar'
                    });
                }, 1000);

                // this._furnitureService.unassign(item.asignacion_mueble[0]?.id, text).subscribe(result => {
                //     this.getData()
                //     Swal.close();
                //     Swal
                //         .fire('¡Desasignado!', result.message, 'success');
                // }, error => {
                //     Swal.close();
                //     Swal.fire('¡Error!', error.message || 'Hubo un error', 'error')
                // }, () => {

                // })
            }
        });

    }

}

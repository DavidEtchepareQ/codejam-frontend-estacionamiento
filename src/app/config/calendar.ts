import { Injectable } from "@angular/core";
import { NgbDatepickerI18n, NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";

const I18N_VALUES = {
    'es': {
        weekdays: ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá', 'Do'],
        months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    }
};

@Injectable()
export class CustomDatepickerI18n extends NgbDatepickerI18n {

    constructor() {
        super();
    }

    getWeekdayLabel(weekday: number): string {
        return I18N_VALUES['es'].weekdays[weekday - 1];
    }

    getWeekdayShortName(weekday: number): string {
        return I18N_VALUES['es'].weekdays[weekday - 1];
    }

    getMonthShortName(month: number): string {
        return I18N_VALUES['es'].months[month - 1].substr(0, 3);
    }

    getMonthFullName(month: number): string {
        return I18N_VALUES['es'].months[month - 1];
    }

    getDayAriaLabel(date: NgbDateStruct): string {
        return `${date.day}-${date.month}-${date.year}`;
    }
}
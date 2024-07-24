import { Injectable } from '@angular/core';
import { PARKINGS } from '../fake-data/parkings';

@Injectable({
    providedIn: 'root'
})
export class ParkingsService {

    constructor() { }

    getList() {
        return PARKINGS
    }
}

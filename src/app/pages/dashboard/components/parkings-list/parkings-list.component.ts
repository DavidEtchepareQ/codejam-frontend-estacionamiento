import { Component } from '@angular/core';
import { ParkingsService } from '../../../../services/parkings.service';

@Component({
  selector: 'app-parkings-list',
  templateUrl: './parkings-list.component.html',
  styleUrl: './parkings-list.component.scss'
})
export class ParkingsListComponent {
    public parkings = [];

    public loading = {
        parkings: true
    }

    constructor(
        private _parkingsService: ParkingsService,
    ) { }

    ngOnInit(): void {
        this.getData();
    }

    getData() {
        this.loading.parkings = true;
        setTimeout(() => {
            this.parkings = this._parkingsService.getList();
            this.loading.parkings = false;
        }, 1000);
    }
}

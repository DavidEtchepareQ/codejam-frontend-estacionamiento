import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingModule } from './routing';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../../theme/shared/shared.module';
import { NavigationComponent } from '../../theme/layouts/admin-layout/navigation/navigation.component';
import { NavBarComponent } from '../../theme/layouts/admin-layout/nav-bar/nav-bar.component';
import { NewReservationComponent } from './components/new-reservation/new-reservation.component';
import { ActualReservationComponent } from './components/actual-reservation/actual-reservation.component';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { HistoricReservationsComponent } from './components/historic-reservations/historic-reservations.component';



@NgModule({
    declarations: [
        DashboardComponent,
        NewReservationComponent,
        ActualReservationComponent,
        HistoricReservationsComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        NavigationComponent,
        NavBarComponent,
        RoutingModule,
        IconComponent
    ]
})
export class DashboardModule { }

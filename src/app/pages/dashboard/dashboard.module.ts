import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingModule } from './routing';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../../theme/shared/shared.module';
import { NavigationComponent } from '../../theme/layouts/admin-layout/navigation/navigation.component';
import { NavBarComponent } from '../../theme/layouts/admin-layout/nav-bar/nav-bar.component';
import { NewReservationComponent } from './components/new-reservation/new-reservation.component';



@NgModule({
    declarations: [
        DashboardComponent,
        NewReservationComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        NavigationComponent,
        NavBarComponent,
        RoutingModule
    ]
})
export class DashboardModule { }

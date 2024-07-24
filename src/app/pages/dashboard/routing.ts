import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { NewReservationComponent } from './components/new-reservation/new-reservation.component';
import { ActualReservationComponent } from './components/actual-reservation/actual-reservation.component';
const routes: Routes = [{
    path: '',
    component: DashboardComponent,
    children: [
        {
            path: '',
            redirectTo: 'reservar',
            pathMatch: 'full',
        },
        {
            path: 'reservar',
            component: NewReservationComponent,
            data: {
                title: "Nueva reserva",
                breadcrumb: "Nueva reserva",
            },
        },
        {
            path: 'reservas-disponibles',
            component: ActualReservationComponent,
            data: {
                title: "Reservas disponibles",
                breadcrumb: "Reservas disponibles",
            },
        },
        {
            path: '**',
            redirectTo: 'reservar'
        },
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class RoutingModule {
}

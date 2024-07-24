import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { NewReservationComponent } from './components/new-reservation/new-reservation.component';
import { ActualReservationComponent } from './components/actual-reservation/actual-reservation.component';
import { HistoricReservationsComponent } from './components/historic-reservations/historic-reservations.component';
import { Error404Component } from './components/error-404/error-404.component';
import { UsersListComponent } from './components/users-list/users-list.component';
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
            path: 'historial',
            component: HistoricReservationsComponent,
            data: {
                title: "Historial",
                breadcrumb: "Historial",
            },
        },
        {
            path: 'administracion',
            children: [
                {
                    path: 'usuarios',
                    component: UsersListComponent,
                    data: {
                        title: "Usuarios",
                        breadcrumb: "Usuarios",
                    },
                },
                {
                    path: '**',
                    component: Error404Component
                },
            ]
        },
        
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class RoutingModule {
}

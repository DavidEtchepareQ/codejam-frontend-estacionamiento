import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
const routes: Routes = [{
    path: '',
    component: DashboardComponent,
    children: [
        {
            path: '',
            redirectTo: 'inicio',
            pathMatch: 'full',
        },
        // {
        //     path: 'administracion',
        //     loadChildren: () => import('projects/pages/src/public-api').then(m => m.AdministrationModule),
        //     data: {
        //         title: "Administración",
        //         breadcrumb: "Administración",
        //     },
        // },
        // {
        //     path: 'reporteria',
        //     loadChildren: () => import('projects/pages/src/public-api').then(m => m.ReporteriaModule),
        //     data: {
        //         title: "Reportería",
        //         breadcrumb: "Reportería",
        //     },
        // },
        // {
        //     path: 'asignaciones',
        //     loadChildren: () => import('projects/pages/src/public-api').then(m => m.AsignationModule),
        //     data: {
        //         title: "Asignaciones",
        //         breadcrumb: "Asignaciones",
        //     },
        // },
        // {
        //     path: 'inicio',
        //     loadChildren: () => import('projects/pages/src/public-api').then(m => m.HomeModule),
        //     data: {
        //         title: "Inicio",
        //         breadcrumb: "Inicio",
        //     },
        // },
        {
            path: '**',
            redirectTo: 'inicio'
        },
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class RoutingModule {
}

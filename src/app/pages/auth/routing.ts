import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
const routes: Routes = [{
    path: '',
    component: AuthComponent,
    children: [
        {
            path: 'iniciar-sesion',
            component: LoginComponent
        },
        {
            path: '**',
            redirectTo: 'iniciar-sesion'
        },
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class RoutingModule {
}

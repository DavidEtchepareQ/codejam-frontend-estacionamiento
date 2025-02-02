import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { RoutingModule } from './routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
    declarations: [
        AuthComponent,
        LoginComponent
    ],
    imports: [
        CommonModule,
        RoutingModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class AuthModule { }

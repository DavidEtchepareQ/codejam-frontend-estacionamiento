import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastrService, } from 'ngx-toastr';
import { DecimalPipe } from '@angular/common';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './theme/shared/shared.module';


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        SharedModule,
        ToastrModule.forRoot({
            timeOut: 3000,
            progressBar: true,
            progressAnimation: 'increasing',
            preventDuplicates: true,
            messageClass: 'text-white'
        }),
        AppRoutingModule
    ],
    providers: [
        DecimalPipe,
        { provide: ToastrService, useClass: ToastrService }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent {
    public form: FormGroup;

    public submitted = false;
    public loading = false;

    constructor(
        private _formBuilder: FormBuilder,
        private _router: Router,
        // private _authService: AuthService,
        // private _sessionService: SessionService
    ) { }

    ngOnInit(): void {
        this.initForm();
    }

    initForm() {
        this.form = this._formBuilder.group({
            email: [null, [Validators.required]],
            password: [null, [Validators.required]],
        })
    }

    login() {
        this.submitted = true;

        if (this.form.invalid) {
            // this._toastr.error('El formulario está incorrecto, revíselo para iniciar sesión.')
            return;
        }
        this.loading = true;
        // this._authService
        //     .login(this.form.value.email, this.form.value.contrasena)
        //     .subscribe(result => {

        //         if (!result.done) {

        //             this.incorrectLogin()
        //             return;
        //         }

        //         const user: User = {
        //             id: result.data.id,
        //             nombre: result.data.nombre,
        //             apellidos: result.data.apellidos,
        //             correo_electronico: this.form.value.email
        //         };

        //         this.correctLogin({
        //             user,
        //             token: result.token
        //         });
        //         this._router.navigateByUrl('/inicio');
        //     }, error => {
        //         this.incorrectLogin()
        //     })

    }

    correctLogin(data: any) {
        // this._sessionService.setSession(data)
    }

    incorrectLogin() {
        this.loading = false;
        // this._toastr.error('Las credenciales no son correctas, intente nuevamente', '¡Error!');
    }

}

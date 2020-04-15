import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../router.animations';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from '../../shared/validators/custom-validators';


@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {

    form: FormGroup;
    submitted: boolean;

    constructor(private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        (document.querySelector('.loader-screen') as HTMLElement).style.display = 'none';

        this.form = this.formBuilder.group({
            nome: [null, Validators.required],
            aceite: [null, Validators.required],
            email: [null, [Validators.required, Validators.email]],
            senha: [null, Validators.compose([
                Validators.required,
                Validators.minLength(8),
                CustomValidators.patternValidator(/\d/, {hasNumber: true}),
                CustomValidators.patternValidator(/[A-Z]/, {hasCapitalCase: true}),
                CustomValidators.patternValidator(/[a-z]/, {hasSmallCase: true})
                // CustomValidators.patternValidator(/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
                //     {
                //         hasSpecialCharacters: true
                //     })
            ])],
            confirmaSenha: [null, Validators.compose([Validators.required])]
        }, {
            validator: CustomValidators.passwordMatchValidator
        });

        this.submitted = false;
    }


    get f() {
        return this.form.controls;
    }

    submit() {
        this.submitted = true;
        if (this.form.invalid) {
            return;

        }
    }
}

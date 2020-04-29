import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../router.animations';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from '../../shared/validators/custom-validators';
import {RegistroService} from '../../shared/services/registro.service';
import {ModalHelper} from '../../shared/helpers/modal.helper';
import {RegistroModel} from '../../shared/models/registro.model';
import {BaseComponet} from '../../base/component/base.componet';
import {Router} from '@angular/router';


@Component({
    selector: 'app-registro',
    templateUrl: './registro.component.html',
    styleUrls: ['./registro.component.scss'],
    animations: [routerTransition()]
})
export class RegistroComponent extends BaseComponet implements OnInit {

    form: FormGroup;
    submitted: boolean;

    constructor(router: Router,
                private formBuilder: FormBuilder,
                private modal: ModalHelper,
                private registroService: RegistroService) {
        super(router);
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
        // if (this.form.invalid) {
        //     return;
        // }

        this.form.clearValidators();
        this.registroService.salvar(<RegistroModel>this.form.value)
            .subscribe(result => {
                    this.irPara('/validacao-registro');
                },
                error => {
                    console.log('error', error);
                    this.modal.mostrarErroRequest(error);
                });

    }
}

import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../router.animations';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from '../../shared/validators/custom-validators';
import {RegistroService} from '../../shared/services/registro.service';
import {ModalHelper} from '../../shared/helpers/modal.helper';
import {RegistroModel} from '../../shared/models/registro.model';
import {BaseComponet} from '../../shared/components/base.componet';
import {Router} from '@angular/router';
import {AplicacaoModel} from '../../shared/models/aplicacao.model';
import {SessionStorageService} from '../../shared/services/sessionStorage.service';


@Component({
    selector: 'app-registro',
    templateUrl: './registro.component.html',
    animations: [routerTransition()]
})
export class RegistroComponent extends BaseComponet implements OnInit {

    form: FormGroup;
    submitted: boolean;
    aplicacao: AplicacaoModel;

    constructor(router: Router,
                private formBuilder: FormBuilder,
                private modal: ModalHelper,
                private sessionService: SessionStorageService,
                private registroService: RegistroService) {
        super(router);
    }

    ngOnInit() {
        (document.querySelector('.loader-screen') as HTMLElement).style.display = 'none';
        this.aplicacao = this.sessionService.getData('aplicacao');
        this.form = this.formBuilder.group({
            nome: [null, Validators.required],
            aceite: [false, Validators.requiredTrue],
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
        this.form.clearValidators();
        this.registroService.salvar(<RegistroModel>this.form.value)
            .subscribe(result => {
                    if (result.sucesso) {
                        this.irPara('/validacao-registro');
                    } else {
                        this.modal.mostrarAlerta('ATENÇÃO', result.mensagem);
                    }
                },
                error => {
                    this.modal.mostrarErroRequest(error);
                });

    }
}

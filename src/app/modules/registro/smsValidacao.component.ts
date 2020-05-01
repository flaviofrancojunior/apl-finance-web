import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../router.animations';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RegistroService} from '../../shared/services/registro.service';
import {ModalHelper} from '../../shared/helpers/modal.helper';
import {RegistroModel} from '../../shared/models/registro.model';
import {BaseComponet} from '../../base/component/base.componet';
import {Router} from '@angular/router';


@Component({
    selector: 'app-sms-validacao',
    templateUrl: './smsValidacao.component.html',
    animations: [routerTransition()]
})
export class SmsValidacaoComponent extends BaseComponet implements OnInit {

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
            email: [null, [Validators.required, Validators.email]],
            codigoValidacao: [null, Validators.required]
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
        this.registroService.ativar(<RegistroModel>this.form.value)
            .subscribe(result => {
                    if (result.sucesso) {
                        this.irPara('/login');
                    } else {
                        this.modal.mostrarAlerta('ATENÇÃO', result.mensagem);
                    }
                },
                error => {
                    this.modal.mostrarErroRequest(error);
                });

    }

}

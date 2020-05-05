import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../router.animations';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RegistroService} from '../../shared/services/registro.service';
import {ModalHelper} from '../../shared/helpers/modal.helper';
import {BaseComponet} from '../../shared/components/base.componet';
import {Router} from '@angular/router';
import {SessionStorageService} from '../../shared/services/sessionStorage.service';
import {AplicacaoModel} from '../../shared/models/aplicacao.model';


@Component({
    selector: 'app-reenvio-codigo',
    templateUrl: './reenvioCodigo.component.html',
    animations: [routerTransition()]
})
export class ReenvioCodigoComponent extends BaseComponet implements OnInit {

    form: FormGroup;
    submitted: boolean;
    aplicacao: AplicacaoModel;

    constructor(router: Router,
                private formBuilder: FormBuilder,
                private sessionService: SessionStorageService,
                private modal: ModalHelper,
                private registroService: RegistroService) {
        super(router);
    }

    ngOnInit() {
        (document.querySelector('.loader-screen') as HTMLElement).style.display = 'none';
        this.aplicacao = this.sessionService.getData('aplicacao');
        this.form = this.formBuilder.group({
            email: [null, [Validators.required, Validators.email]]
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
        this.registroService.reenvioCodigo(this.form.controls['email'].value)
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

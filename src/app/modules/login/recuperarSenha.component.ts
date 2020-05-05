import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {routerTransition} from '../../router.animations';
import {BaseComponet} from '../../shared/components/base.componet';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ModalHelper} from '../../shared/helpers/modal.helper';
import {AutenticacaoService} from '../../shared/services/autenticacao.service';
import {AplicacaoModel} from '../../shared/models/aplicacao.model';
import {SessionStorageService} from '../../shared/services/sessionStorage.service';



@Component({
    selector: 'app-login-recuperar-senha',
    templateUrl: './recuperarSenha.component.html',
    animations: [routerTransition()]
})
export class RecuperarSenhaComponent extends BaseComponet implements OnInit {

    form: FormGroup;
    submitted: boolean;
    aplicacao: AplicacaoModel;

    constructor(router: Router,
                private formBuilder: FormBuilder,
                private modal: ModalHelper,
                private sessionService: SessionStorageService,
                private usuarioService: AutenticacaoService) {
        super(router);
    }

    ngOnInit() {
        (document.querySelector('.loader-screen') as HTMLElement).style.display = 'none';
        this.aplicacao = this.sessionService.getData('aplicacao');
        this.form = this.formBuilder.group({
            email: [null, [Validators.required, Validators.email]],
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
        this.usuarioService.recuperarSenha(this.form.controls['email'].value)
            .subscribe(result => {
                    if (result.sucesso) {
                        this.modal.mostrarAviso('Recuperação de Senha', result.mensagem)
                            .then(() => {
                                this.irPara('/login');
                            });

                    } else {
                        this.modal.mostrarAlerta('ATENÇÃO', result.mensagem);
                    }
                },
                error => {
                    this.modal.mostrarErroRequest(error);
                });
    }


}

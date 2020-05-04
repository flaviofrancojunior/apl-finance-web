import {Component, isDevMode, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {routerTransition} from '../../router.animations';
import {BaseComponet} from '../../base/component/base.componet';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ModalHelper} from '../../shared/helpers/modal.helper';
import {AutenticacaoModel} from '../../shared/models/autenticacao.model';
import {DeviceDetectorService} from 'ngx-device-detector';
import {Guid} from 'guid-typescript';
import {SessionStorageService} from '../../shared/services/sessionStorage.service';
import {LocalStorageService} from '../../shared/services/localStorage.service';
import {AutenticacaoService} from '../../shared/services/autenticacao.service';
import {AplicacaoModel} from '../../shared/models/aplicacao.model';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    animations: [routerTransition()]
})
export class LoginComponent extends BaseComponet implements OnInit {

    form: FormGroup;
    submitted: boolean;
    aplicacao: AplicacaoModel;

    constructor(router: Router,
                private formBuilder: FormBuilder,
                private modal: ModalHelper,
                private localService: LocalStorageService,
                private sessionService: SessionStorageService,
                private deviceService: DeviceDetectorService,
                private autenticacaoService: AutenticacaoService) {
        super(router);
    }

    ngOnInit() {
        (document.querySelector('.loader-screen') as HTMLElement).style.display = 'none';
        this.aplicacao = this.sessionService.getData('aplicacao');
        this.form = this.formBuilder.group({
            email: [null, [Validators.required, Validators.email]],
            senha: [null, [Validators.required]]
        });
        this.submitted = false;


        if (isDevMode()) {
            this.form.controls['email'].setValue("flaviofrancojunior@gmail.com");
            this.form.controls['senha'].setValue("123456Jr");
            this.submit();
        }

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
        const dados = new AutenticacaoModel();
        dados.email = this.form.controls['email'].value;
        dados.senha = this.form.controls['senha'].value;
        dados.dadosDispositivo = JSON.stringify(this.deviceService.getDeviceInfo());
        dados.SistemaDispositivo = this.deviceService.getDeviceInfo().os;
        dados.sessaoDeviceId = Guid.create().toString();
        this.autenticacaoService.autenticar(dados)
            .subscribe(result => {
                    if (result.sucesso) {
                        this.localService.setData('usuario', result);
                        this.sessionService.setData('token', result.token);
                        this.sessionService.setData('sessaoId', result.sessaoId);
                        this.sessionService.setData('deviceId', dados.sessaoDeviceId);
                        this.irPara('/dashboard');
                    } else {
                        this.modal.mostrarAlerta('ATENÇÃO', result.mensagem);
                    }
                },
                error => {
                    this.modal.mostrarErroRequest(error);
                });
    }


}

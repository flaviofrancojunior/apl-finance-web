import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {routerTransition} from '../../../router.animations';
import {BaseComponet} from '../../../shared/components/base.componet';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ModalHelper} from '../../../shared/helpers/modal.helper';
import {LocalidadeService} from '../../../shared/services/localidade.service';
import {LocalidadeModel} from '../../../shared/models/localidade.model';
import {SessionStorageService} from '../../../shared/services/sessionStorage.service';
import {UsuarioModel} from '../../../shared/models/usuario.model';
import * as _ from 'lodash';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';

@Component({
    selector: 'app-perfil-meusdados',
    templateUrl: './meusDados.component.html',
    styleUrls: ['./meusDados.component.scss'],
    animations: [routerTransition()]
})
export class MeusDadosComponent extends BaseComponet implements OnInit {

    form: FormGroup;
    submitted: boolean;
    estados: Array<LocalidadeModel>;
    cidades: Array<string>;


    constructor(router: Router,
                private formBuilder: FormBuilder,
                private modal: ModalHelper,
                private sessionService: SessionStorageService,
                private localidadeService: LocalidadeService) {
        super(router);
    }

    ngOnInit() {
        const usuario: UsuarioModel = this.sessionService.getData('usuario');
        this.cidades = [];
        this.localidadeService.obterListaDeEstadosFederacao()
            .subscribe(result => {
                this.estados = _.orderBy(result, ['nome']);
            });

        this.form = this.formBuilder.group({
            nome: [usuario.nome, Validators.required],
            email: [usuario.email, [Validators.required, Validators.email]],
            celular: [usuario.celular, [Validators.required]],
            cpf: [usuario.cpf, [Validators.required]],
            sexo: [usuario.sexo, [Validators.required]],
            dataNascimento: [usuario.dataNascimento, [Validators.required]],
            estado: [usuario.estado, [Validators.required]],
            cidade: [usuario.cidade, [Validators.required]],
            profissao: [usuario.profissao, [Validators.required]],
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

        // this.registroService.salvar(<RegistroModel>this.form.value)
        //     .subscribe(result => {
        //             if (result.sucesso) {
        //                 this.irPara('/validacao-registro');
        //             } else {
        //                 this.modal.mostrarAlerta('ATENÇÃO', result.mensagem);
        //             }
        //         },
        //         error => {
        //             this.modal.mostrarErroRequest(error);
        //         });

    }

    obterListaCidades(estado: string) {
        this.localidadeService.obterListaDeCidadesPorUF(estado.split(':')[1].toLowerCase())
            .subscribe(result => {
                _.forEach(result, function (item) {
                    this.cidades.push(item.nome);
                }.bind(this));
            });
    }

    search = (text$: Observable<string>) =>
        text$.pipe(
            debounceTime(200),
            distinctUntilChanged(),
            map(term => (term === '' ? this.cidades :
                this.cidades.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10)))
}




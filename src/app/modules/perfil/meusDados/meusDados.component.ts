import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {routerTransition} from '../../../router.animations';
import {BaseComponet} from '../../../shared/components/base.componet';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ModalHelper} from '../../../shared/helpers/modal.helper';
import {CustomValidators} from '../../../shared/validators/custom-validators';
import {RegistroModel} from '../../../shared/models/registro.model';


@Component({
    selector: 'app-perfil-meusdados',
    templateUrl: './meusDados.component.html',
    styleUrls: ['./meusDados.component.scss'],
    animations: [routerTransition()]
})
export class MeusDadosComponent extends BaseComponet implements OnInit {

    form: FormGroup;
    submitted: boolean;


    constructor(router: Router,
                private formBuilder: FormBuilder,
                private modal: ModalHelper) {
        super(router);
    }

    ngOnInit() {
        this.form = this.formBuilder.group({
            nome: [null, Validators.required],
            email: [null, [Validators.required, Validators.email]],
            celular: [null, [Validators.required]]

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
}




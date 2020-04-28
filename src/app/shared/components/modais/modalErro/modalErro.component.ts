import {Component, Input, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal';
import {ErroModel} from '../../../models/erro.model';


@Component({
    selector: 'app-box-modal-erro',
    templateUrl: 'modalErro.component.html',
})

export class ModalErroComponent implements OnInit {

    erro: ErroModel;

    constructor(public bsModalRef: BsModalRef) {
    }

    ngOnInit() {
        console.log('modal', this.erro);
    }
}



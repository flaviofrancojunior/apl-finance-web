import {Component, Input, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal';

@Component({
    selector: 'app-box-modal-falha',
    templateUrl: 'modalFalha.component.html',
})

export class ModalFalhaComponent {

    titulo: string;
    mensagem: string;

    constructor(public bsModalRef: BsModalRef) {
    }

}



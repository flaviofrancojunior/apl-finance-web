import {Component} from '@angular/core';
import {Subject} from 'rxjs';
import {BsModalRef} from 'ngx-bootstrap/modal';


@Component({
    selector: 'app-box-modal-aviso',
    templateUrl: 'modalAviso.component.html'
})

export class ModalAvisoComponent {

    public mensagem: string;
    public titulo: string;
    result: Subject<boolean> = new Subject<boolean>();

    constructor(public bsModalRef: BsModalRef) {
    }

    /**
     * Fecha modal
     */
    fechar(): void {
        this.result.next(true);
        this.bsModalRef.hide();
    }
}



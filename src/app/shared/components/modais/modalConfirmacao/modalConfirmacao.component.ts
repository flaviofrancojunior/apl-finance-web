import {Component} from '@angular/core';
import {Subject} from 'rxjs';
import {BsModalRef} from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-box-modal-confirmacao',
  templateUrl: 'modalConfirmacao.component.html'
})

export class ModalConfirmacaoComponent {

  public mensagem: string;
  public titulo: string;
  result: Subject<boolean> = new Subject<boolean>();

  constructor(public bsModalRef: BsModalRef) {
  }



  /**
   * Fecha modal
   */
  fechar(resposta: boolean): void {
    this.result.next(resposta);
    this.bsModalRef.hide();
  }
}



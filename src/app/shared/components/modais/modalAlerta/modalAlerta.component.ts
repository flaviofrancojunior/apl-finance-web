import {Component} from '@angular/core';
import {Subject} from 'rxjs';
import {BsModalRef} from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-box-modal-alert',
  templateUrl: 'modalAlerta.component.html'
})

export class ModalAlertComponent {

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



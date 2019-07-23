import {Component} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';


@Component({
  selector: 'app-box-modal-alert',
  templateUrl: 'modalErro.component.html',
  providers: [BsModalService]
})

export class ModalErroComponent {

  constructor(public bsModalRef: BsModalRef) {
  }


}



import {Injectable} from '@angular/core';
import {BsModalRef, BsModalService, ModalOptions} from 'ngx-bootstrap';
import {ErroModel} from '../../models/erro.model';
import {ModalErroComponent} from '../../components/modalErro/modalErro.component';

@Injectable({
  providedIn: 'root'
})
export class ModalHelper {

  bsModalRef: BsModalRef;
  title: string;
  message: string;
  private config: ModalOptions;

  constructor(private modalService: BsModalService) {
    this.config = new ModalOptions();
    this.config.animated = true;
    this.config.keyboard = true;
    this.config.backdrop = true;
    this.config.ignoreBackdropClick = false;
  }

  /**
   * Exibe modal padrão para erros
   * @param erro
   */
  public mostrarErroRequest(erro: ErroModel) {
    this.config.initialState = erro;
    this.config.class = 'modal-lg modal-erro';
    this.bsModalRef = this.modalService.show(ModalErroComponent, this.config);
  }
}

// }
// this.config.class = 'modal-erro';
//
//
// const initialState = {
//   title: `${erro.codigo} - ${erro.titulo}`,
//   message: erro.mensagem,
//   options: this.config,
// };
//
// return this.bsModalRef = this.modalService.show(ModalErroComponent, {initialState});

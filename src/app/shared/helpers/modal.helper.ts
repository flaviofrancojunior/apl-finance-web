import {Injectable} from '@angular/core';
import {BsModalRef, BsModalService, ModalOptions} from 'ngx-bootstrap/modal';
import {ErroModel} from '../models/erro.model';
import {ModalErroComponent} from '../components/modais/modalErro/modalErro.component';
import {ModalAlertComponent} from '../components/modais/modalAlerta/modalAlerta.component';
import {ModalConfirmacaoComponent} from '../components/modais/modalConfirmacao/modalConfirmacao.component';
import {ModalFalhaComponent} from '../components/modais/modalFalha/modalFalha.component';


@Injectable({
    providedIn: 'root'
})
export class ModalHelper {

    bsModalRef: BsModalRef;
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
     */
    public mostrarErroRequest(erro: ErroModel): void {
        this.config.initialState = {'erro': erro};
        this.config.class = 'modal-dialog modal-sm modal-dialog-centered';
        this.bsModalRef = this.modalService.show(ModalErroComponent, this.config);
    }


    /**
     * Exibe modal padrão de alerta
     */
    public mostrarAlerta(titulo: string, mensagem: string) {
        this.config.initialState = {'titulo': titulo, 'mensagem': mensagem};
        this.config.class = 'modal-dialog modal-sm modal-dialog-centered  modal-warning';
        this.bsModalRef = this.modalService.show(ModalAlertComponent, this.config);
        return new Promise<boolean>((resolve, reject) => this.bsModalRef.content.result.subscribe((result) => resolve(result)));
    }


    /**
     * Exibe modal padrão de confirmação
     */
    public modalConfirmacao(titulo: string, mensagem: string) {
        this.config.initialState = {'titulo': titulo, 'mensagem': mensagem};
        this.config.class = 'modal-dialog modal-sm modal-dialog-centered modal-warning';
        this.config.ignoreBackdropClick = true;
        this.bsModalRef = this.modalService.show(ModalConfirmacaoComponent, this.config);
        return new Promise<boolean>((resolve, reject) => this.bsModalRef.content.result.subscribe((result) => resolve(result)));
    }


    /**
     * Exibe modal padrão de alerta
     */
    public modalFalha(titulo: string, mensagem: string) {
        this.config.initialState = {'titulo': titulo, 'mensagem': mensagem};
        this.config.class = 'modal-dialog modal-sm modal-dialog-centered';
        this.bsModalRef = this.modalService.show(ModalFalhaComponent, this.config);
        return new Promise<boolean>((resolve, reject) => this.bsModalRef.content.result.subscribe((result) => resolve(result)));
    }


}



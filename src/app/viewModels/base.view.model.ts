import {Injectable} from '@angular/core';
import {ErroModel} from '../models/erro.model';
import {Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class BaseViewModel {

  protected error: ErroModel;
  protected mostrarErro: boolean;
  protected spinnerOp: any;

  constructor(private router: Router,
              private spinner: NgxSpinnerService) {
    this.error = new ErroModel();
    this.mostrarErro = false;
    this.spinnerOp = {
      type: 'pacman',
      fullScreen: false,
      size: 'default',
      bdColor: 'rgb(0, 3, 51,.7)',
      color: 'white'
    };
  }

  /***
   * Obtem erro de processamento
   */
  public getErroProcessamento(): ErroModel {
    return this.error;
  }

  /***
   * Obtem erro de processamento
   */
  public getMostarErro(): boolean {
    return this.mostrarErro;
  }

  /***
   * Obtem erro de processamento
   */
  public setMostrarErro(status: boolean) {
    this.mostrarErro = status;
  }

  /**
   * Inicializa rota informada
   * @param rota
   */
  protected irPara(rota: string) {
    this.router.navigate([rota]);
  }

  /**
   * Mostrar spinner de loagind
   * @param nome
   */
  protected showSpinner(nome: string) {
    this.spinner.show(nome, this.spinnerOp);
  }

  /**
   * Esconde spinner de loagind
   * @param nome
   */
  protected hideSpinner(nome: string) {
    this.spinner.hide(nome);
  }


}

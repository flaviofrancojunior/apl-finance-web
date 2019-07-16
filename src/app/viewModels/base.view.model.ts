import {Injectable} from '@angular/core';
import {ErroModel} from '../models/erro.model';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BaseViewModel {

  protected error: ErroModel;
  protected mostrarErro: boolean;

  constructor(private router: Router) {
    this.error = new ErroModel();
    this.mostrarErro = false;
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


}

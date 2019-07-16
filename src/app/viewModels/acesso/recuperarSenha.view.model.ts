import {Injectable} from '@angular/core';
import {first} from 'rxjs/operators';
import {AutenticacaoService} from '../../services/autenticacao.service';
import {BaseViewModel} from '../base.view.model';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class RecuperarSenhaViewModel extends BaseViewModel {


  constructor(router: Router,
              private autenticacaoService: AutenticacaoService) {
    super(router);
  }


  /**
   * Executa processamentor recuperação de senha
   */
  public processarSolicitacao(email: string) {
    this.mostrarErro = false;
    this.autenticacaoService.recuperarSenha(email)
      .pipe(first())
      .subscribe(
        () => {
          this.autenticacaoService.setAutenticado();
          this.irPara('/login');
        },
        error => {
          this.error = error;
          this.mostrarErro = true;
        });
  }


}

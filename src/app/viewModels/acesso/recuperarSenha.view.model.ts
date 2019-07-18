import {Injectable} from '@angular/core';
import {first} from 'rxjs/operators';
import {AutenticacaoService} from '../../services/autenticacao.service';
import {BaseViewModel} from '../base.view.model';
import {Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';


@Injectable({
  providedIn: 'root'
})
export class RecuperarSenhaViewModel extends BaseViewModel {


  constructor(router: Router,
              spinner: NgxSpinnerService,
              private autenticacaoService: AutenticacaoService) {
    super(router, spinner);
  }


  /**
   * Executa processamentor recuperação de senha
   */
  public processarSolicitacao(email: string, spinnerNome: string) {
    this.showSpinner(spinnerNome);
    this.mostrarErro = false;
    this.autenticacaoService.recuperarSenha(email)
      .pipe(first())
      .subscribe(
        () => {
          this.autenticacaoService.setAutenticado();
          this.hideSpinner(spinnerNome);
          this.irPara('/login');
        },
        error => {
          this.error = error;
          this.mostrarErro = true;
          this.hideSpinner(spinnerNome);
        });
  }


}

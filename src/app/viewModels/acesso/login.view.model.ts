import {Injectable} from '@angular/core';
import {UsuarioModel} from '../../models/usuario.model';
import {Router} from '@angular/router';
import {AutenticacaoService} from '../../services/autenticacao.service';
import {first} from 'rxjs/operators';
import {BaseViewModel} from '../base.view.model';
import {NgxSpinnerService} from 'ngx-spinner';


@Injectable({
  providedIn: 'root'
})
export class LoginViewModel extends BaseViewModel {


  constructor(spinner: NgxSpinnerService,
              router: Router,
              private autenticacaoService: AutenticacaoService) {
    super(router, spinner);
  }


  /**
   * Executa tentativa de autenticação do usuário informado.
   */
  public processarAutenticacao(dados: UsuarioModel, spinnerNome: string) {
    this.showSpinner(spinnerNome);
    this.mostrarErro = false;
    this.autenticacaoService.login(dados.email, dados.senha)
      .pipe(first())
      .subscribe(
        () => {
          this.autenticacaoService.setAutenticado();
          this.irPara('/dashboard');
        },
        error => {
          this.error = error;
          this.mostrarErro = true;
          this.hideSpinner(spinnerNome);
        });
  }


}

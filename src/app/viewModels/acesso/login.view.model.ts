import {Injectable} from '@angular/core';
import {UsuarioModel} from '../../models/usuario.model';
import {Router} from '@angular/router';
import {AutenticacaoService} from '../../services/autenticacao.service';
import {first} from 'rxjs/operators';
import {BaseViewModel} from '../base.view.model';


@Injectable({
  providedIn: 'root'
})
export class LoginViewModel extends BaseViewModel {


  constructor(private autenticacaoService: AutenticacaoService,
              router: Router) {
    super(router);
  }


  /**
   * Executa tentativa de autenticação do usuário informado.
   */
  public processarAutenticacao(dados: UsuarioModel) {
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
        });
  }


}

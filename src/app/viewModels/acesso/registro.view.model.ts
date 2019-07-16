import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {BaseViewModel} from '../base.view.model';
import {RegistroModel} from '../../models/registro.model';
import {CadastroService} from '../../services/cadastro.service';


@Injectable({
  providedIn: 'root'
})
export class RegistroViewModel extends BaseViewModel {


  constructor(router: Router,
              private cadastroService: CadastroService) {
    super(router);
  }


  /**
   * Envia dados de registro para cadastro.
   */
  public enviarRegistro(registro: RegistroModel) {
    this.cadastroService.enviarNovoRegistro(registro)
      .pipe(first())
      .subscribe(
        () => {
          this.irPara('/');
        },
        error => {
          this.error = error;
          this.mostrarErro = true;
        });
  }


}

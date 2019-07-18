import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {BaseViewModel} from '../base.view.model';
import {RegistroModel} from '../../models/registro.model';
import {CadastroService} from '../../services/cadastro.service';
import {NgxSpinnerService} from 'ngx-spinner';


@Injectable({
  providedIn: 'root'
})
export class RegistroViewModel extends BaseViewModel {


  constructor(spinner: NgxSpinnerService,
              router: Router,
              private cadastroService: CadastroService) {
    super(router, spinner);
  }


  /**
   * Envia dados de registro para cadastro.
   */
  public enviarRegistro(registro: RegistroModel, spinnerNome: string) {
    this.showSpinner(spinnerNome);
    this.cadastroService.enviarNovoRegistro(registro)
      .pipe(first())
      .subscribe(
        () => {
          this.hideSpinner(spinnerNome);
          this.irPara('/');
        },
        error => {
          this.hideSpinner(spinnerNome);
          this.error = error;
          this.mostrarErro = true;
        });
  }


}

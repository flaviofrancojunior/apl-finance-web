import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CamposIguaisHelper} from '../../../helpers/camposIguais.helper';
import {SenhaForteValidator} from '../../../validators/senhaForte.validator';
import {CadastroService} from '../../../services/cadastro.service';
import {first} from 'rxjs/operators';
import {Router} from '@angular/router';
import {ErroModel} from '../../../models/erro.model';
import {RegistroModel} from '../../../models/registro.model';


@Component({
  selector: 'app-dashboard',
  templateUrl: 'registro.component.html'
})
export class RegistroComponent implements OnInit {
  private showErro: boolean;
  private error: ErroModel;


  constructor(private router: Router,
              private cadastroService: CadastroService) {
    this.showErro = false;
  }

  /**
   * Inicializador
   */
  ngOnInit() {
    this.error = new ErroModel();
  }


  /**
   * Obtem formulário de forma simplificada
   */
  private esconderErro(status) {
    this.showErro = status;
  }


  /**
   * Envia dados de registro para cadastro.
   */
  private enviarRegistro(registro: RegistroModel) {
    this.cadastroService.enviarNovoRegistro(registro)
      .pipe(first())
      .subscribe(
        () => {
          this.router.navigate(['/']);
        },
        error => {
          this.showErro = true;
          this.error = error;

        });
  }

}

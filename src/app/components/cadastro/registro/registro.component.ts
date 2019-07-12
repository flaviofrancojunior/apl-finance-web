import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CamposIguaisHelper} from '../../../helpers/camposIguais.helper';
import {SenhaForteValidator} from '../../../validators/senhaForte.validator';
import {CadastroService} from '../../../services/cadastro.service';
import {first} from 'rxjs/operators';
import {Router} from '@angular/router';
import {ErroModel} from '../../../models/erro.model';


@Component({
  selector: 'app-dashboard',
  templateUrl: 'registro.component.html'
})
export class RegistroComponent implements OnInit {

  private registerForm: FormGroup;
  private submitted: boolean;
  private showErro: boolean;
  private error: ErroModel;


  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private cadastroService: CadastroService) {
    this.submitted = false;
    this.showErro = false;
  }

  /**
   * Inicializador
   */
  ngOnInit() {
    this.error = new ErroModel();
    this.criarFormulario();
  }

  /**
   * Executa criação do formulário
   * @param registroModel
   */
  private criarFormulario() {
    // cpf: ['', [Validators.required, this.validateBrService.cpf]],
    // celular: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{11}$')]],

    this.registerForm = this.formBuilder.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(8), SenhaForteValidator.valida]],
      confirmaSenha: ['', [, Validators.required]]
    }, {
      validator: CamposIguaisHelper('senha', 'confirmaSenha')
    });
  }


  /**
   * Obtem formulário de forma simplificada
   */
  private get f() {
    return this.registerForm.controls;
  }


  /**
   * Obtem formulário de forma simplificada
   */
  private esconderErro(status) {
    this.showErro = status;
  }


  /**
   * Envia formulário de registor
   */
  private enviar() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    this.cadastroService.enviarNovoRegistro(this.registerForm.value)
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

import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SenhaForteValidator} from '../../tools/validators/senhaForte.validator';
import {CamposIguaisHelper} from '../../tools/helpers/camposIguais.helper';


@Component({
  selector: 'app-formulario-registro',
  templateUrl: 'formularioRegistro.component.html'
})
export class FormularioRegistroComponent implements OnInit {

  @Output() enviar = new EventEmitter();
  private form: FormGroup;
  private submitted: boolean;


  constructor(private formBuilder: FormBuilder) {
    this.submitted = false;
  }

  /**
   * Inicializador
   */
  ngOnInit() {
    // cpf: ['', [Validators.required, this.validateBrService.cpf]],
    // celular: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{11}$')]],

    this.form = this.formBuilder.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(8), SenhaForteValidator.valida]],
      confirmaSenha: ['', [Validators.required]]
    }, {
      validator: CamposIguaisHelper('senha', 'confirmaSenha')
    });
  }


  /**
   * Obtem formulário de forma simplificada
   */
  private get f() {
    return this.form.controls;
  }


  /**
   * envia formulário
   */
  private onSubmit() {

    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.enviar.emit(this.form.value);
  }
}

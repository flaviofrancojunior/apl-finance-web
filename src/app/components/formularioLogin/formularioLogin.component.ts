import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-formulario-login',
  templateUrl: 'formularioLogin.component.html'
})

export class FormularioLoginComponent implements OnInit {

  @Output() enviar = new EventEmitter();
  @Input() recuperarRedirect: string;
  private form: FormGroup;
  private submitted = false;


  constructor(
    private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]]
    });
  }

  /**
   * Facilitador acesso propriedades do formulário
   */
  get f() {
    return this.form.controls;
  }

  /**
   * envio do formulário
   */
  onSubmit() {

    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.enviar.emit(this.form.value);
  }
}



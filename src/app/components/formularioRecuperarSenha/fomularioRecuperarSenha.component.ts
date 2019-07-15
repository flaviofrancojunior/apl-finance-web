import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-formulario-recuperar-senha',
  templateUrl: 'fomularioRecuperarSenha.component.html'
})

export class FomularioRecuperarSenhaComponent implements OnInit {

  @Output() enviar = new EventEmitter();
  form: FormGroup;
  submitted = false;


  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
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



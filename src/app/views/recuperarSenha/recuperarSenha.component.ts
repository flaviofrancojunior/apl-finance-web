import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'recuperarSenha.component.html'
})

export class RecuperarSenhaComponent implements OnInit {
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

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.form.value, null, 4));
  }


}



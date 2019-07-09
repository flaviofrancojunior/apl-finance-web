import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CamposIguaisHelper} from '../../helpers/camposIguais.helper';
import {ValidateBrService} from 'angular-validate-br';
import {SenhaForteValidator} from '../../validators/senhaForte.validator';


@Component({
  selector: 'app-dashboard',
  templateUrl: 'registro.component.html'
})
export class RegistroComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
              private validateBrService: ValidateBrService) {
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nome: ['', Validators.required],
      cpf: ['', [Validators.required, this.validateBrService.cpf]],
      celular: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{11}$')]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(8), SenhaForteValidator.valida]],
      confirmaSenha: ['', Validators.required]
    }, {
      validator: CamposIguaisHelper('senha', 'confirmaSenha')
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

}

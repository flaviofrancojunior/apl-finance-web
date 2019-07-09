import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AutenticacaoService} from '../../services/autenticacao.service';
import {ActivatedRoute, Router} from '@angular/router';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AutenticacaoService) {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  /**
   * Facilitador acesso propriedades do formulário
   */
  get f() {
    return this.loginForm.controls;
  }

  /**
   * envio do formulário
   */
  onSubmit() {
    this.submitted = true;


    if (this.loginForm.invalid) {
      return;
    }

    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.login(this.f.email.value, this.f.password.value)
    .pipe(first())
    .subscribe(
      () => {
        this.router.navigate([this.returnUrl]);
      },
      error => {
        this.error = error;
        this.loading = false;
      });
  }
}



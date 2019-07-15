import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {UsuarioModel} from '../../../models/usuario.model';
import {AutenticacaoService} from '../../../services/autenticacao.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {

  private error: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AutenticacaoService) {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {

  }


  /**
   * envio do formulário
   */
  private login(dados: UsuarioModel) {
    this.authenticationService.login(dados.email, dados.senha)
      .pipe(first())
      .subscribe(
        () => {
          this.authenticationService.setAutenticado();
          this.router.navigate(['/dashboard']);
        },
        error => {
          this.error = error;
        });
  }
}



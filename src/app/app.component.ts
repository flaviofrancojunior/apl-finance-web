import {Component, OnInit} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {AutenticacaoService} from './services/autenticacao.service';
import {UsuarioModel} from './models/usuario.model';


@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {

  private usuarioLogado: UsuarioModel;

  constructor(private router: Router,
              private authenticationService: AutenticacaoService) {

    this.authenticationService.currentUser.subscribe(x => this.usuarioLogado = x);
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }


  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}

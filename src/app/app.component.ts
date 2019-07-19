import {Component, OnInit} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {AutenticacaoService} from './services/autenticacao.service';
import {UsuarioModel} from './models/usuario.model';
import {AplicacaoModel} from './models/Aplicacao.model';
import {first} from 'rxjs/operators';
import {BsModalRef, BsModalService, ModalDirective} from 'ngx-bootstrap';


@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {

  private modalRef: BsModalRef;
  private usuarioLogado: UsuarioModel;
  private aplicacao: AplicacaoModel;

  constructor(private router: Router,
              private modalService: BsModalService,
              private autenticacaoService: AutenticacaoService) {
    localStorage.clear();
    this.autenticacaoService.usuarioLogado.subscribe(x => this.usuarioLogado = x);
    this.autenticacaoService.aplicacao.subscribe(x => this.aplicacao = x);
    this.getAplicacao();
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }


  /**
   * Obtem dados iniciais da aplicação
   */
  public getAplicacao() {
    this.autenticacaoService.obterAplicacao()
      .pipe(first())
      .subscribe(result => {
          this.autenticacaoService.setAplicacao(result);

        },
        error => {
          this.modalRef = this.modalService.show("TESTE");
        });
  }

}

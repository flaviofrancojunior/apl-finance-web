import {Component, OnDestroy, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {navItems} from './menu';
import {AutenticacaoService} from '../../../services/autenticacao.service';
import {AplicacaoModel} from '../../../models/Aplicacao.model';


@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnDestroy {
  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement;
  private app: AplicacaoModel;

  constructor(private autenticacaoService: AutenticacaoService,
              @Inject(DOCUMENT) _document?: any) {

    this.autenticacaoService.aplicacao.subscribe(x => this.app = x);

    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = _document.body.classList.contains('sidebar-minimized');
    });
    this.element = _document.body;
    this.changes.observe(<Element>this.element, {
      attributes: true,
      attributeFilter: ['class']
    });
  }

  ngOnDestroy(): void {
    this.changes.disconnect();
  }
}

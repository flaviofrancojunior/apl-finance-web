import {Component, Output, EventEmitter, OnInit} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {AutenticacaoService} from '../../../../shared/services/autenticacao.service';
import {UsuarioModel} from '../../../../shared/models/usuario.model';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    showMenu: string;
    usuario: UsuarioModel;

    @Output() collapsedEvent = new EventEmitter<boolean>();

    constructor(private autenticacaoService: AutenticacaoService,
                private translate: TranslateService, public router: Router) {
        this.router.events.subscribe(val => {

        });
    }

    ngOnInit() {
        this.showMenu = '';
        this.usuario = this.autenticacaoService.getUsuarioLogado();
    }


    eventCalled() {
    }

    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        if (window.innerWidth <= 992) {
            if (dom.classList.contains('sidemenu-open')) {
                dom.classList.remove('sidemenu-open');
                setTimeout(() => {
                    dom.classList.remove('menuactive');
                }, 800);
            }
        }
    }

    logout() {
        this.toggleSidebar();
        this.autenticacaoService.logout();
    }


}

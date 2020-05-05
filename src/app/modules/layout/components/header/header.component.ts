import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import {AplicacaoModel} from '../../../../shared/models/aplicacao.model';
import {SessionStorageService} from '../../../../shared/services/sessionStorage.service';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

    aplicacao: AplicacaoModel;

    constructor(private sessionService: SessionStorageService,
                private translate: TranslateService, public router: Router) {
        this.router.events.subscribe(val => {});
    }

    ngOnInit() {
        this.aplicacao = this.sessionService.getData('aplicacao');
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        event.stopPropagation();
        dom.classList.toggle('sidemenu-open');
        dom.classList.toggle('menuactive');
    }

    changeLang(language: string) {
        this.translate.use(language);
    }
}

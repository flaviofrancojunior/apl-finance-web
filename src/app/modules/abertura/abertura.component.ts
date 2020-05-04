import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {routerTransition} from '../../router.animations';
import {
    SwiperComponent,
    SwiperDirective,
    SwiperConfigInterface,
    SwiperScrollbarInterface,
    SwiperPaginationInterface
} from 'ngx-swiper-wrapper';
import {LocalStorageService} from '../../shared/services/localStorage.service';
import {SessionStorageService} from '../../shared/services/sessionStorage.service';
import {ModalHelper} from '../../shared/helpers/modal.helper';
import {AutenticacaoService} from '../../shared/services/autenticacao.service';
import {Title} from '@angular/platform-browser';
import {AplicacaoModel} from '../../shared/models/aplicacao.model';


@Component({
    selector: 'app-abertura',
    templateUrl: './abertura.component.html',
    styleUrls: ['./abertura.component.scss'],
    animations: [routerTransition()]
})
export class AberturaComponent implements OnInit {

    public configurations: SwiperConfigInterface = {
        direction: 'horizontal',
        slidesPerView: 1,
        keyboard: true,
        mousewheel: true,
        scrollbar: false,
        navigation: true,
        pagination: true
    };

    aplicacao: AplicacaoModel;

    constructor(public router: Router,
                private sessionService: SessionStorageService,
                private modal: ModalHelper,
                private titleService: Title,
                private autenticacaoService: AutenticacaoService,
                private localService: LocalStorageService) {
    }

    ngOnInit() {
        (document.querySelector('.loader-screen') as HTMLElement).style.display = 'none';

        this.autenticacaoService.obterAplicacao()
            .subscribe(result => {
                    this.aplicacao = result;
                    this.sessionService.setData('aplicacao', result);
                    this.titleService.setTitle(result.nome);
                    const sessao = this.sessionService.getData('sessionId');
                    if (sessao !== null) {
                        this.router.navigateByUrl('/dashboard');
                    } else {
                        const usuario = this.localService.getData('usuario');
                        if (usuario) {
                            this.router.navigateByUrl('/login');
                        }
                    }
                },
                error => {
                    this.modal.mostrarErroRequest(error);
                });
    }

}

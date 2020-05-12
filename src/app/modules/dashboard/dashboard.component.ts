import {Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import {routerTransition} from '../../router.animations';
import {
    SwiperComponent,
    SwiperDirective,
    SwiperConfigInterface,
    SwiperScrollbarInterface,
    SwiperPaginationInterface
} from 'ngx-swiper-wrapper';

import 'swiper/dist/css/swiper.min.css';
import {AplicacaoModel} from '../../shared/models/aplicacao.model';
import {SessionStorageService} from '../../shared/services/sessionStorage.service';
import {UsuarioModel} from '../../shared/models/usuario.model';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {

    aplicacao: AplicacaoModel;
    usuario: UsuarioModel;


    public configurations: SwiperConfigInterface = {
        direction: 'horizontal',
        slidesPerView: 'auto',
        keyboard: true,
        mousewheel: true,
        scrollbar: false,
        navigation: true,
        pagination: false
    };

    public configurationstwo: SwiperConfigInterface = {
        direction: 'horizontal',
        slidesPerView: 2,
        spaceBetween: 0,
        pagination: {
            el: '.swiper-pagination',
        },
    };

    public configurationsoffer: SwiperConfigInterface = {
        direction: 'horizontal',
        slidesPerView: 'auto',
        spaceBetween: 0,
    };

    public configurationsnews: SwiperConfigInterface = {
        slidesPerView: 2,
        spaceBetween: 0,
        pagination: {
            el: '.swiper-pagination',
        },
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 0
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 0
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 0
            },
            320: {
                slidesPerView: 2,
                spaceBetween: 0
            }
        }
    };

    constructor(private sessionService: SessionStorageService) {
    }

    public randomize(): void {
    }

    ngOnInit() {
        this.aplicacao = this.sessionService.getData('aplicacao');
        this.usuario = this.sessionService.getData('usuario');
    }
}

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

    constructor(public router: Router,
                private sessionService: SessionStorageService,
                private localService: LocalStorageService) {
    }

    ngOnInit() {
        (document.querySelector('.loader-screen') as HTMLElement).style.display = 'none';

        const sessao = this.sessionService.getData('sessionId');
        if (sessao !== null) {
            this.router.navigateByUrl('/dashboard');
        } else {
            const usuario = this.localService.getData('usuario');
            if (usuario) {
                this.router.navigateByUrl('/login');
            }
        }

    }

}

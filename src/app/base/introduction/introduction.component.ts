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


@Component({
    selector: 'app-introduction',
    templateUrl: './introduction.component.html',
    styleUrls: ['./introduction.component.scss'],
    animations: [routerTransition()]
})
export class IntroductionComponent implements OnInit {

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
                private localService: LocalStorageService) {
    }

    ngOnInit() {
        (document.querySelector('.loader-screen') as HTMLElement).style.display = 'none';
        const usuario = this.localService.getData('usuario');
        if (usuario) {
            this.router.navigateByUrl('/login');
        }
    }

}

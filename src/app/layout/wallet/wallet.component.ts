import { Component, OnInit, AfterViewInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {
    SwiperComponent,
    SwiperDirective,
    SwiperConfigInterface,
    SwiperScrollbarInterface,
    SwiperPaginationInterface
} from 'ngx-swiper-wrapper';

@Component({
    selector: 'app-wallet',
    templateUrl: './wallet.component.html',
    styleUrls: ['./wallet.component.scss'],
    animations: [routerTransition()]
})
export class WalletComponent implements OnInit {
    public configuration: SwiperConfigInterface = {
        direction: 'horizontal',
        slidesPerView: 1,
        keyboard: true,
        mousewheel: true,
        scrollbar: false,
        navigation: true,
        pagination: {
            el: '.swiper-pagination'
        },
    };
    public configurationsoffer: SwiperConfigInterface = {
        direction: 'horizontal',
        slidesPerView: 'auto',
        spaceBetween: 0,
    };

    constructor() {
    }
    ngOnInit() {
    }

}

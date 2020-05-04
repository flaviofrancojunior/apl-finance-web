import { Component, OnInit, AfterViewInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

import {
    SwiperComponent,
    SwiperDirective,
    SwiperConfigInterface,
    SwiperScrollbarInterface,
    SwiperPaginationInterface
} from 'ngx-swiper-wrapper';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
    animations: [routerTransition()]
})
export class ProfileComponent implements OnInit {
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

    constructor() {
    }
    ngOnInit() {
    }

}

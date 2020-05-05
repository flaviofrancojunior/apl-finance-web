import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule, NgbDropdownModule, NgbTabsetModule, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { SwiperModule, SwiperConfigInterface, SWIPER_CONFIG  } from 'ngx-swiper-wrapper';
import { DashboardComponent } from './dashboard.component';
import { StatModule } from '../../../shared';
import {DashboardRoutingModule} from './dashboard-routing.module';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {

};

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule,
        NgbAlertModule,
        DashboardRoutingModule,
        StatModule,
        NgbDropdownModule,
        NgbTabsetModule,
        NgbProgressbarModule,
        SwiperModule,
    ],
    declarations: [
        DashboardComponent
    ],
    providers: [
        {
          provide: SWIPER_CONFIG,
          useValue: DEFAULT_SWIPER_CONFIG
        }
      ]
})
export class DashboardModule {}

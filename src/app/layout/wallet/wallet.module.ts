import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule, NgbDropdownModule, NgbTabsetModule, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { SwiperModule, SwiperConfigInterface, SWIPER_CONFIG  } from 'ngx-swiper-wrapper';

import { WalletsModule } from './wallet-routing.module';
import { WalletComponent } from './wallet.component';
import { StatModule } from '../../shared';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {};

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule,
        NgbAlertModule,
        WalletsModule,
        SwiperModule,
        NgbProgressbarModule,
        StatModule,
        NgbDropdownModule,
        NgbTabsetModule,
    ],
    declarations: [WalletComponent],
    providers: [
        {
          provide: SWIPER_CONFIG,
          useValue: DEFAULT_SWIPER_CONFIG
        }
      ]
})
export class WalletModule {}

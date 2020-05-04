import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule, NgbDropdownModule, NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { SwiperModule, SwiperConfigInterface, SWIPER_CONFIG  } from 'ngx-swiper-wrapper';

import { ProfilesModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { StatModule } from '../../../shared';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {

};

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule,
        NgbAlertModule,
        ProfilesModule,
        StatModule,
        NgbDropdownModule,
        SwiperModule,
        NgbTabsetModule,
        // Specify ng-circle-progress as an import
    ],
    declarations: [ProfileComponent],
    providers: [
        {
          provide: SWIPER_CONFIG,
          useValue: DEFAULT_SWIPER_CONFIG
        }
      ]
})
export class ProfileModule {}

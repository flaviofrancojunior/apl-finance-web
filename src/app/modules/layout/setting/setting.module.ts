import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule, NgbDropdownModule, NgbTabsetModule, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

import { SettingsModule } from './setting-routing.module';
import { SettingComponent } from './setting.component';
import { StatModule } from '../../../shared';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule,
        NgbAlertModule,
        SettingsModule,
        NgbProgressbarModule,
        StatModule,
        NgbDropdownModule,
        NgbTabsetModule,
    ],
    declarations: [SettingComponent],
})
export class SettingModule {}

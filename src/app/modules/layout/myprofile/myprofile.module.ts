import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule, NgbDropdownModule, NgbTabsetModule, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

import { MyprofilesModule } from './myprofile-routing.module';
import { MyprofileComponent } from './myprofile.component';
import { StatModule } from '../../../shared';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule,
        NgbAlertModule,
        MyprofilesModule,
        NgbProgressbarModule,
        StatModule,
        NgbDropdownModule,
        NgbTabsetModule,
    ],
    declarations: [MyprofileComponent],
})
export class MyprofileModule {}

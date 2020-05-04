import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule, NgbDropdownModule, NgbTabsetModule, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

import { NotificationsModule } from './notification-routing.module';
import { NotificationComponent } from './notification.component';
import { StatModule } from '../../../shared';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule,
        NgbAlertModule,
        NotificationsModule,
        NgbProgressbarModule,
        StatModule,
        NgbDropdownModule,
        NgbTabsetModule,
    ],
    declarations: [NotificationComponent],
})
export class NotificationModule {}

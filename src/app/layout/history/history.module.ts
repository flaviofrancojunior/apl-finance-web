import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule, NgbDropdownModule, NgbTabsetModule, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

import { HistorysModule } from './history-routing.module';
import { HistoryComponent } from './history.component';
import { StatModule } from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule,
        NgbAlertModule,
        HistorysModule,
        NgbProgressbarModule,
        StatModule,
        NgbDropdownModule,
        NgbTabsetModule,
    ],
    declarations: [HistoryComponent],
})
export class HistoryModule {}

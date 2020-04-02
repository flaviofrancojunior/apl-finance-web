import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule, NgbDropdownModule, NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';

import { TransactionsModule } from './transaction-routing.module';
import { TransactionComponent } from './transaction.component';
import { StatModule } from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule,
        NgbAlertModule,
        TransactionsModule,
        StatModule,
        NgbDropdownModule,
        NgbTabsetModule,
    
    ],
    declarations: [TransactionComponent],

})
export class TransactionModule {}

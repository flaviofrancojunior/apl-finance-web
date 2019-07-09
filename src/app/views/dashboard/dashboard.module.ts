import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    FormsModule,
    DashboardRoutingModule,
    ChartsModule,
    BsDropdownModule,
    NgbModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ DashboardComponent ]
})
export class DashboardModule { }

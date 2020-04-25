import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        CommonModule,
        TranslateModule,
        SignupRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [SignupComponent]
})
export class SignupModule { }

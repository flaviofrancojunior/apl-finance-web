import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BoxErroComponent} from './paginaErro/boxErro.component';


@NgModule({
  declarations: [
    BoxErroComponent
  ],
  exports: [
    BoxErroComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GeralModule {}

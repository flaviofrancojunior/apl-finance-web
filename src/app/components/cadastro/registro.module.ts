import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegistroComponent} from './registro/registro.component';
import {CadastroService} from '../../services/cadastro.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {GeralModule} from '../geral/geral.module';


@NgModule({
  declarations: [
    RegistroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GeralModule,
  ],
  exports: [
    RegistroComponent
  ],
  providers: [
    CadastroService
  ]
})

export class RegistroModule {}

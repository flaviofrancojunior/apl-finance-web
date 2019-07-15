import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {RecuperarSenhaComponent} from './recuperarSenha/recuperarSenha.component';
import {AutenticacaoService} from '../../services/autenticacao.service';
import {FormularioRegistroComponent} from '../../components/formularioRegistro/formularioRegistro.component';
import {BoxErroComponent} from '../../components/paginaErro/boxErro.component';
import {RegistroComponent} from './registro/registro.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormularioLoginComponent} from '../../components/formularioLogin/formularioLogin.component';
import {CadastroService} from '../../services/cadastro.service';
import {CardNovoRegistroComponent} from '../../components/cardNovoRegistro/cardNovoRegistro.component';
import {FomularioRecuperarSenhaComponent} from '../../components/formularioRecuperarSenha/fomularioRecuperarSenha.component';


@NgModule({
  declarations: [
    LoginComponent,
    RecuperarSenhaComponent,
    FormularioRegistroComponent,
    BoxErroComponent,
    FormularioLoginComponent,
    RegistroComponent,
    CardNovoRegistroComponent,
    FomularioRecuperarSenhaComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    AutenticacaoService,
    CadastroService
  ]
})
export class AcessoModule {}

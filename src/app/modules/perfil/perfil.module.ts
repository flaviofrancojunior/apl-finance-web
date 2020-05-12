import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {MeusDadosComponent} from './meusDados/meusDados.component';
import {MenuPerfilComponent} from './menuPerfil/menuPerfil.component';
import {PerfilRoutingModule} from './perfil-routing.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        PerfilRoutingModule
    ],
    declarations: [
        MenuPerfilComponent,
        MeusDadosComponent
    ],
    exports: []
})


export class PerfilModule {}

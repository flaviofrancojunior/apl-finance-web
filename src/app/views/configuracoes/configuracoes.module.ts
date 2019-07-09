import {NgModule} from '@angular/core';
import {ConfiguracoesRoutingModule} from './configuracoes-routing.module';
import {ConfiguracoesComponent} from './configuracoes.component';
import {ConfiguracoesDadosComponent} from './configuracoes-dados.component';


@NgModule({
  imports: [ConfiguracoesRoutingModule],
  declarations: [
    ConfiguracoesComponent,
    ConfiguracoesDadosComponent
  ]
})
export class ConfiguracoesModule {}

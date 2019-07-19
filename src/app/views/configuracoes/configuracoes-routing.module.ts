import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ConfiguracoesComponent} from './configuracoes.component';
import {ConfiguracoesDadosComponent} from './configuracoes-dados.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Configurações'
    },
    children: [
      {
        path: '',
        component: ConfiguracoesComponent,
      },
      {
        path: 'meus-dados',
        component: ConfiguracoesDadosComponent,
        data: {
          title: 'Meus Dados'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfiguracoesRoutingModule {}

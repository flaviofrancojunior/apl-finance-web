import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Import Containers
import {DefaultLayoutComponent} from './containers';
import {LoginComponent} from './views/acesso/login/login.component';
import {RecuperarSenhaComponent} from './views/acesso/recuperarSenha/recuperarSenha.component';
import {RegistroComponent} from './views/acesso/registro/registro.component';
import {AuthGuard} from './guards/auth-guard.service';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Entrar na Aplicação'
    }
  },
  {
    path: 'recuperar',
    component: RecuperarSenhaComponent,
    data: {
      title: 'Recuperação de Senha'
    }
  },
  {
    path: 'registro',
    component: RegistroComponent,
    data: {
      title: 'Registrar Nova Conta'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'configuracoes',
        loadChildren: () => import('./views/configuracoes/configuracoes.module').then(m => m.ConfiguracoesModule)
      },
    ]
  },
  {
    path: '**',
    component: DefaultLayoutComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    AuthGuard
  ],
})
export class AppRoutingModule {}

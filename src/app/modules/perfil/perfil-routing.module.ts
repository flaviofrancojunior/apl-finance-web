import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../../shared/guard/auth.guard';
import {MeusDadosComponent} from './meusDados/meusDados.component';
import {MenuPerfilComponent} from './menuPerfil/menuPerfil.component';

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Perfil'
        },
        children: [{
            path: 'menu',
            component: MenuPerfilComponent,
            canActivate: [AuthGuard],
            data: {
                title: 'Menus da Aplicação'
            }
        }, {
            path: 'meus-dados',
            component: MeusDadosComponent,
            canActivate: [AuthGuard],
            data: {
                title: 'Níveis de Acesso'
            },
        }]
    }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PerfilRoutingModule {}

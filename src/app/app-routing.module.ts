import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RegistroComponent} from './modules/registro/registro.component';
import {SmsValidacaoComponent} from './modules/registro/smsValidacao.component';
import {ReenvioCodigoComponent} from './modules/registro/reenvioCodigo.component';
import {LoginComponent} from './modules/login/login.component';
import {AberturaComponent} from './modules/abertura/abertura.component';
import {RecuperarSenhaComponent} from './modules/login/recuperarSenha.component';
import {AuthGuard} from './shared/guard/auth.guard';
import {LayoutComponent} from './modules/layout/layout.component';
import {DashboardComponent} from './modules/dashboard/dashboard.component';


const routes: Routes = [
    {path: '', component: AberturaComponent},
    {
        path: '',
        component: LayoutComponent,
        canActivate: [AuthGuard],
        children: [
            {path: '', redirectTo: 'dashboard', pathMatch: 'prefix'},
            {path: 'dashboard', component: DashboardComponent},
            {
                path: 'perfil',
                loadChildren: () => import('./modules/perfil/perfil.module').then(m => m.PerfilModule)
            },
        ]
    },
    {path: 'login', component: LoginComponent},
    {path: 'registro', component: RegistroComponent},
    {path: 'validacao-registro', component: SmsValidacaoComponent},
    {path: 'reenvio-codigo', component: ReenvioCodigoComponent},
    {path: 'recuperar-senha', component: RecuperarSenhaComponent},
    {
        path: '*',
        redirectTo: '/',
        pathMatch: 'full',
    },
    {
        path: '**',
        redirectTo: '/',
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: false})],
    exports: [RouterModule],
    providers: [
        AuthGuard
    ],
})
export class AppRoutingModule {}

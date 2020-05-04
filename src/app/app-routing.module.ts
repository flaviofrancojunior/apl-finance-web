import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from './shared';
import {RegistroComponent} from './modules/registro/registro.component';
import {SmsValidacaoComponent} from './modules/registro/smsValidacao.component';
import {ReenvioCodigoComponent} from './modules/registro/reenvioCodigo.component';
import {LoginComponent} from './modules/login/login.component';
import {AberturaComponent} from './modules/abertura/abertura.component';
import {RecuperarSenhaComponent} from './modules/login/recuperarSenha.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full',
    },
    {
        path: '*',
        redirectTo: '/',
        pathMatch: 'full',
    },
    {path: '', component: AberturaComponent},
    {path: 'login', component: LoginComponent},
    {path: 'registro', component: RegistroComponent},
    {path: 'validacao-registro', component: SmsValidacaoComponent},
    {path: 'reenvio-codigo', component: ReenvioCodigoComponent},
    {path: 'recuperar-senha', component: RecuperarSenhaComponent},
    {path: 'dashboard', loadChildren: () => import('./modules/layout/layout.module').then(m => m.LayoutModule), canActivate: [AuthGuard]},

    // {path: '', loadChildren: () => import('./base/layout/layout.module').then(m => m.LayoutModule), canActivate: [AuthGuard]},

    // {
    //     path: '',
    //     component: DefaultLayoutComponent,
    //     canActivate: [AuthGuard],
    //     children: [
    //         {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    //         {path: '*', redirectTo: 'dashboard', pathMatch: 'full'},
    //         {path: '**', redirectTo: 'dashboard', pathMatch: 'full'},
    //     ]
    // },


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

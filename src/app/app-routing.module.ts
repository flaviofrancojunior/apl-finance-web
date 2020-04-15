import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';

const routes: Routes = [
    { path: '', loadChildren: () => import('./base/introduction/introduction.module').then(m => m.IntroductionModule)},
    { path: '', loadChildren: () => import('./base/layout/layout.module').then(m => m.LayoutModule), canActivate: [AuthGuard] },
    { path: 'login', loadChildren: () => import('./acesso/login/login.module').then(m => m.LoginModule) },
    { path: 'registro', loadChildren: () => import('./acesso/signup/signup.module').then(m => m.SignupModule) },
    { path: 'error', loadChildren: () => import('./base/server-error/server-error.module').then(m => m.ServerErrorModule) },
    { path: 'access-denied', loadChildren: () => import('./acesso/access-denied/access-denied.module').then(m => m.AccessDeniedModule) },
    { path: 'not-found', loadChildren: () => import('./base/not-found/not-found.module').then(m => m.NotFoundModule) },
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}

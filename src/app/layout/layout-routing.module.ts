import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
            { path: 'statistics', loadChildren: () => import('./statistics/statistics.module').then(m => m.StatisticsModule)},
            { path: 'wallet', loadChildren: () => import('./wallet/wallet.module').then(m => m.WalletModule)},
            { path: 'transaction', loadChildren: () => import('./transaction/transaction.module').then(m => m.TransactionModule)},
            { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)},
            { path: 'notification', loadChildren: () => import('./notification/notification.module').then(m => m.NotificationModule)},
            { path: 'history', loadChildren: () => import('./history/history.module').then(m => m.HistoryModule)},
            { path: 'setting', loadChildren: () => import('./setting/setting.module').then(m => m.SettingModule)},
            { path: 'myprofile', loadChildren: () => import('./myprofile/myprofile.module').then(m => m.MyprofileModule)},
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}

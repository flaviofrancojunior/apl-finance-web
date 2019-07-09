import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import {AppComponent} from './app.component';

// Import containers
import {DefaultLayoutComponent} from './containers';
import {LoginComponent} from './views/login/login.component';


const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import {AppRoutingModule} from './app.routing';

// Import 3rd party components
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {ChartsModule} from 'ng2-charts';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RecuperarSenhaComponent} from './views/recuperarSenha/recuperarSenha.component';
import {RegistroComponent} from './views/registro/registro.component';
import {AngularValidateBrLibModule} from 'angular-validate-br';
import {NgxMaskModule} from 'ngx-mask';
import {BasicAuthInterceptor} from './Interceptors/basic-auth.interceptor';
import {ErrorInterceptor} from './Interceptors/error.interceptor';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    NgbModule,
    ReactiveFormsModule,
    AngularValidateBrLibModule,
    NgxMaskModule.forRoot()

  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    LoginComponent,
    RegistroComponent,
    RecuperarSenhaComponent

  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {
      provide: [LocationStrategy, PERFECT_SCROLLBAR_CONFIG],
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

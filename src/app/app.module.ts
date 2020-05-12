import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {LOCALE_ID, NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {RequestInterceptor} from './shared/interceptors/request.interceptor';
import {ErrorInterceptor} from './shared/interceptors/error.interceptor';
import {RegistroComponent} from './modules/registro/registro.component';
import {SmsValidacaoComponent} from './modules/registro/smsValidacao.component';
import {ReenvioCodigoComponent} from './modules/registro/reenvioCodigo.component';
import {LoginComponent} from './modules/login/login.component';
import {LocalStorageService} from './shared/services/localStorage.service';
import {SessionStorageService} from './shared/services/sessionStorage.service';
import {SWIPER_CONFIG, SwiperConfigInterface, SwiperModule} from 'ngx-swiper-wrapper';
import {AberturaComponent} from './modules/abertura/abertura.component';
import {RecuperarSenhaComponent} from './modules/login/recuperarSenha.component';
import {LayoutComponent} from './modules/layout/layout.component';
import {SidebarComponent} from './modules/layout/components/sidebar/sidebar.component';
import {HeaderComponent} from './modules/layout/components/header/header.component';
import {FooterComponent} from './modules/layout/components/footer/footer.component';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DashboardComponent} from './modules/dashboard/dashboard.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {};

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        SharedModule,
    ],
    declarations: [
        AppComponent,
        AberturaComponent,
        RegistroComponent,
        SmsValidacaoComponent,
        ReenvioCodigoComponent,
        LoginComponent,
        RecuperarSenhaComponent,
        LayoutComponent,
        SidebarComponent,
        HeaderComponent,
        FooterComponent,
        DashboardComponent,
    ],
    providers: [
        LocalStorageService,
        SessionStorageService,
        {
            provide: SWIPER_CONFIG,
            useValue: DEFAULT_SWIPER_CONFIG
        },
        {provide: SWIPER_CONFIG, useValue: DEFAULT_SWIPER_CONFIG},
        {provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
        {provide: LOCALE_ID, useValue: 'pt-BR'},
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}

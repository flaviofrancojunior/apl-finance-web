import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LanguageTranslationModule} from './shared/modules/language-translation/language-translation.module';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthGuard} from './shared';
import {LocalStorageService} from './shared/services/storage.service';
import {SharedModule} from './shared/shared.module';
import {RequestInterceptor} from './shared/interceptors/request.interceptor';
import {ErrorInterceptor} from './shared/interceptors/error.interceptor';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        LanguageTranslationModule,
        AppRoutingModule,
        SharedModule,
    ],
    declarations: [AppComponent],
    providers: [
        AuthGuard,
        LocalStorageService,
        {provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
        {provide: LOCALE_ID, useValue: 'pt-BR'},
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}

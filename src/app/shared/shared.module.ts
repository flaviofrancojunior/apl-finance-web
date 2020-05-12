import {LOCALE_ID, NgModule} from '@angular/core';
import {
    NgbAlertModule, NgbCarouselModule,
    NgbDatepickerModule,
    NgbDropdownModule, NgbModalModule,
    NgbModule,
    NgbPaginationModule, NgbProgressbarModule, NgbTabsetModule,
    NgbTooltipModule
} from '@ng-bootstrap/ng-bootstrap';
import {CommonModule, registerLocaleData} from '@angular/common';
import {AngularValidateBrLibModule} from 'angular-validate-br';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SelectDropDownModule} from 'ngx-select-dropdown';
import {LoadingBarHttpClientModule} from '@ngx-loading-bar/http-client';
import {LoadingBarRouterModule} from '@ngx-loading-bar/router';
import {LoadingBarModule} from '@ngx-loading-bar/core';
import {environment} from '../../environments/environment';
import {CURRENCY_MASK_CONFIG, CurrencyMaskConfig} from 'ng2-currency-mask';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {AlertModule} from 'ngx-bootstrap/alert';
import {ModalModule} from 'ngx-bootstrap/modal';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import localePt from '@angular/common/locales/pt';
import {DeviceDetectorModule} from 'ngx-device-detector';
import {TranslateModule} from '@ngx-translate/core';
import {ModalAlertComponent} from './components/modais/modalAlerta/modalAlerta.component';
import {ModalConfirmacaoComponent} from './components/modais/modalConfirmacao/modalConfirmacao.component';
import {ModalErroComponent} from './components/modais/modalErro/modalErro.component';
import {ModalFalhaComponent} from './components/modais/modalFalha/modalFalha.component';
import {ModalAvisoComponent} from './components/modais/modalAviso/modalAviso.component';
import {GaugeChartModule} from 'angular-gauge-chart';
import {SwiperModule} from 'ngx-swiper-wrapper';
import {LanguageTranslationModule} from './modules/language-translation/language-translation.module';
import {HttpClientModule} from '@angular/common/http';
import {StatModule} from './modules';
import {IConfig, NgxMaskModule} from 'ngx-mask';

const maskConfig: Partial<IConfig> = {
    validation: false,
};

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
    align: 'right',
    allowNegative: true,
    decimal: ',',
    precision: 2,
    prefix: 'R$ ',
    suffix: '',
    thousands: '.'
};
registerLocaleData(localePt);

@NgModule({
    imports: [
        TabsModule.forRoot(),
        AlertModule.forRoot(),
        ModalModule.forRoot(),
        BsDropdownModule.forRoot(),
        DeviceDetectorModule.forRoot(),
        NgxMaskModule.forRoot(maskConfig),
        NgbModule,
        CommonModule,
        TranslateModule,
        NgbAlertModule,
        NgbPaginationModule,
        NgbTooltipModule,
        AngularValidateBrLibModule,
        FormsModule,
        ReactiveFormsModule,
        SelectDropDownModule,
        LoadingBarHttpClientModule,
        NgbDatepickerModule,
        LoadingBarHttpClientModule,
        LoadingBarRouterModule,
        LoadingBarModule,
        TranslateModule,
        NgbDropdownModule,
        NgbTabsetModule,
        NgbModalModule,
        NgbDatepickerModule,
        GaugeChartModule,
        FormsModule,
        ReactiveFormsModule,
        LanguageTranslationModule,
        HttpClientModule,
        SwiperModule,
        NgbCarouselModule,
        StatModule,
        NgbProgressbarModule,


    ],
    declarations: [
        ModalAlertComponent,
        ModalConfirmacaoComponent,
        ModalErroComponent,
        ModalFalhaComponent,
        ModalAvisoComponent,
    ],
    exports: [
        NgbModule,
        CommonModule,
        TranslateModule,
        NgbAlertModule,
        NgbPaginationModule,
        NgbTooltipModule,
        AngularValidateBrLibModule,
        FormsModule,
        ReactiveFormsModule,
        SelectDropDownModule,
        LoadingBarHttpClientModule,
        NgbDatepickerModule,
        LoadingBarHttpClientModule,
        LoadingBarRouterModule,
        LoadingBarModule,
        TranslateModule,
        NgbDropdownModule,
        NgbTabsetModule,
        NgbModalModule,
        NgbDatepickerModule,
        GaugeChartModule,
        FormsModule,
        ReactiveFormsModule,
        LanguageTranslationModule,
        HttpClientModule,
        SwiperModule,
        NgbCarouselModule,
        StatModule,
        NgbProgressbarModule,
    ],
    entryComponents: [
        ModalAlertComponent,
        ModalConfirmacaoComponent,
        ModalErroComponent,
        ModalFalhaComponent,
        ModalAvisoComponent
    ],
    providers: [
        {provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig},
        {provide: LOCALE_ID, useValue: 'pt-BR'}
    ]

})
export class SharedModule {}

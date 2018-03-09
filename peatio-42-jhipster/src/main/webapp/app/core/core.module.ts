import { NgModule, LOCALE_ID } from '@angular/core';
import { DatePipe, registerLocaleData } from '@angular/common';
import { Title } from '@angular/platform-browser';
import locale from '@angular/common/locales/en';

import {
    JhiTrackerService,
    WindowRef,
    JhiLanguageHelper,
    LoginService,
    AccountService,
    StateStorageService,
    Principal,
    CSRFService,
    AuthServerProvider,
    UserService,
    UserRouteAccessService
} from './';

@NgModule({
    imports: [],
    exports: [],
    declarations: [],
    providers: [
        JhiTrackerService,
        WindowRef,
        LoginService,
        Title,
        {
            provide: LOCALE_ID,
            useValue: 'en'
        },
        JhiLanguageHelper,
        AccountService,
        StateStorageService,
        Principal,
        CSRFService,
        AuthServerProvider,
        UserService,
        DatePipe,
        UserRouteAccessService
    ]
})
export class MybackendCoreModule {
    constructor() {
        registerLocaleData(locale);
    }
}

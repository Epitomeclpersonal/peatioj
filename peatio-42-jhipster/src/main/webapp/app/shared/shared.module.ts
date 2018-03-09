import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { DateFormatPipe, ParsePipe } from 'angular2-moment';

import { NgbDateMomentAdapter } from './util/datepicker-adapter';
import { MybackendSharedLibsModule, MybackendSharedCommonModule, HasAnyAuthorityDirective } from './';

@NgModule({
    imports: [MybackendSharedLibsModule, MybackendSharedCommonModule],
    declarations: [HasAnyAuthorityDirective],
    providers: [ParsePipe, DateFormatPipe, { provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    exports: [MybackendSharedCommonModule, HasAnyAuthorityDirective],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MybackendSharedModule {}

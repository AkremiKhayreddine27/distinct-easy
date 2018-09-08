import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from '@angular/common';

import { ContactsFaker } from './contacts.faker';
import { ReservationsFaker } from './reservations.faker';
import { PropertiesFaker } from './properties.faker';
import { DocumentsFaker } from './documents.faker';

const FAKERS = [
    ContactsFaker,
    ReservationsFaker,
    PropertiesFaker,
    DocumentsFaker
]

@NgModule({
    imports: [
        CommonModule,
    ],
    providers: [
        ...FAKERS,
    ],
})
export class FakerModule {
    static forRoot(): ModuleWithProviders {
        return <ModuleWithProviders>{
            ngModule: FakerModule,
            providers: [
                ...FAKERS,
            ],
        };
    }
}
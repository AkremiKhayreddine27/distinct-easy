import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FakerModule } from './faker/faker.module';

import { StateService } from './state.service';
import { LayoutService } from './layout.service';
import { UserService } from './users.service';
import { PropertiesService } from './services/properties.service';
import { ReservationsService } from './services/reservations.service';
import { PaymentsService } from './services/payments.service';
import { ContactsService } from './services/contacts.service';
import { DocumentsService } from './services/documents.service';

const SERVICES = [
  StateService,
  LayoutService,
  UserService,
  PropertiesService,
  ReservationsService,
  PaymentsService,
  ContactsService,
  DocumentsService
];

@NgModule({
  imports: [
    CommonModule,
    FakerModule
  ],
  providers: [
    ...SERVICES,
  ],
})
export class DataModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: DataModule,
      providers: [
        ...SERVICES, ...FakerModule.forRoot().providers
      ],
    };
  }
}

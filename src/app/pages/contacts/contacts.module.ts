import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeModule } from '../../@theme/theme.module';
import { DistinctTableModule } from 'distinct-table';

import { ContactsRoutingModule, routedComponents } from './contacts-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ContactsRoutingModule,
    ThemeModule,
    DistinctTableModule
  ],
  declarations: [...routedComponents]
})
export class ContactsModule { }

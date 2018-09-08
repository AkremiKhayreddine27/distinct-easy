import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeModule } from '../../@theme/theme.module';
import { DistinctTableModule } from 'distinct-table';

import { DocumentsRoutingModule, routedComponents } from './documents-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DocumentsRoutingModule,
    ThemeModule,
    DistinctTableModule
  ],
  declarations: [...routedComponents]
})
export class DocumentsModule { }

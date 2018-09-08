import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing.module';

import { DistinctTableModule } from 'distinct-table';


@NgModule({
  imports: [
    CommonModule,
    PaymentsRoutingModule,
    DistinctTableModule
  ],
})
export class PaymentsModule { }

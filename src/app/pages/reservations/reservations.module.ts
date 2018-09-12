import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ThemeModule } from "../../@theme/theme.module";

import {
  ReservationsRoutingModule,
  routedComponents
} from "./reservations-routing.module";

import { DistinctTableModule } from "distinct-table";

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    ReservationsRoutingModule,
    DistinctTableModule
  ],
  declarations: [...routedComponents]
})
export class ReservationsModule {}

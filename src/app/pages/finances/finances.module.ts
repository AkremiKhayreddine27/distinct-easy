import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ThemeModule } from "../../@theme/theme.module";
import { NgxEchartsModule } from "ngx-echarts";

import {
  FinancesRoutingModule,
  routedComponents
} from "./finances-routing.module";
import { IncommeComponent } from "./incomme/incomme.component";
import { OutgoComponent } from "./outgo/outgo.component";
import { ProfitsComponent } from "./profits/profits.component";
import { NetComponent } from './profits/net/net.component';
import { PotentielComponent } from './profits/potentiel/potentiel.component';

@NgModule({
  imports: [CommonModule, FinancesRoutingModule, ThemeModule, NgxEchartsModule],
  declarations: [
    ...routedComponents,
    IncommeComponent,
    OutgoComponent,
    ProfitsComponent,
    NetComponent,
    PotentielComponent
  ]
})
export class FinancesModule {}

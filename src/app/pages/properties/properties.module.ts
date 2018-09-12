import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ThemeModule } from "../../@theme/theme.module";

import {
  PropertiesRoutingModule,
  routedComponents
} from "./properties-routing.module";

@NgModule({
  imports: [CommonModule, PropertiesRoutingModule, ThemeModule],
  declarations: [...routedComponents]
})
export class PropertiesModule {}

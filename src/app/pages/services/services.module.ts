import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ThemeModule } from "../../@theme/theme.module";
import { DistinctTableModule } from "distinct-table";

import {
  ServicesRoutingModule,
  routedComponents
} from "./services-routing.module";
import { CategoryComponent } from './categories/category/category.component';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    ServicesRoutingModule,
    DistinctTableModule
  ],
  declarations: [...routedComponents, CategoryComponent]
})
export class ServicesModule {}

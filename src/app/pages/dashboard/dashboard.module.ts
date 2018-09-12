import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ThemeModule } from "../../@theme/theme.module";
import { NgxEchartsModule } from "ngx-echarts";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";
import { PotentialNightsComponent } from "./potential-nights/potential-nights.component";
import { PotentialRevenuesComponent } from "./potential-revenues/potential-revenues.component";
import { NightDistributionPlatformComponent } from "./night-distribution-platform/night-distribution-platform.component";
import { RevenueDistributionPlatformComponent } from "./revenue-distribution-platform/revenue-distribution-platform.component";
import { RevenuesExpensesStatsComponent } from "./revenues-expenses-stats/revenues-expenses-stats.component";
import { PotentialNightsFrontComponent } from "./potential-nights/potential-nights-front/potential-nights-front.component";
import { PotentialNightsBackComponent } from "./potential-nights/potential-nights-back/potential-nights-back.component";
import { PotentialRevenuesBackComponent } from './potential-revenues/potential-revenues-back/potential-revenues-back.component';
import { PotentialRevenuesFrontComponent } from './potential-revenues/potential-revenues-front/potential-revenues-front.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ThemeModule,
    NgxEchartsModule
  ],
  declarations: [
    DashboardComponent,
    PotentialNightsComponent,
    PotentialRevenuesComponent,
    NightDistributionPlatformComponent,
    RevenueDistributionPlatformComponent,
    RevenuesExpensesStatsComponent,
    PotentialNightsFrontComponent,
    PotentialNightsBackComponent,
    PotentialRevenuesBackComponent,
    PotentialRevenuesFrontComponent
  ],
  exports: [
    DashboardComponent,
    PotentialNightsComponent,
    PotentialRevenuesComponent,
    NightDistributionPlatformComponent,
    RevenueDistributionPlatformComponent,
    RevenuesExpensesStatsComponent
  ]
})
export class DashboardModule {}

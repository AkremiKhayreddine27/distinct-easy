import { ModuleWithProviders, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { NgSelectModule } from "@ng-select/ng-select";

import {
  NbActionsModule,
  NbCardModule,
  NbLayoutModule,
  NbMenuModule,
  NbRouteTabsetModule,
  NbSearchModule,
  NbSidebarModule,
  NbTabsetModule,
  NbThemeModule,
  NbUserModule,
  NbCheckboxModule,
  NbPopoverModule,
  NbContextMenuModule,
  NbProgressBarModule,
  NbSpinnerModule
} from "@nebular/theme";

import { NbSecurityModule } from "@nebular/security";

import {
  FooterComponent,
  HeaderComponent,
  SearchInputComponent,
  ThemeSettingsComponent,
  SwitcherComponent,
  LayoutDirectionSwitcherComponent,
  ThemeSwitcherComponent,
  TinyMCEComponent,
  ThemeSwitcherListComponent
} from "./components";
import {
  CapitalizePipe,
  PluralPipe,
  RoundPipe,
  TimingPipe,
  NumberWithCommasPipe
} from "./pipes";
import {
  OneColumnLayoutComponent,
  SampleLayoutComponent,
  ThreeColumnsLayoutComponent,
  TwoColumnsLayoutComponent
} from "./layouts";
import { DEFAULT_THEME } from "./styles/theme.default";
import { COSMIC_THEME } from "./styles/theme.cosmic";
import { CORPORATE_THEME } from "./styles/theme.corporate";
import { LocatusSelectPropertyComponent } from "./locatus/locatus-select-property/locatus-select-property.component";
import { LocatusCardHeaderActionsComponent } from "./locatus/locatus-card-header-actions/locatus-card-header-actions.component";
import { LocatusFiltersComponent } from "./locatus/locatus-filters/locatus-filters.component";
import { LocatusCardSearchComponent } from "./locatus/locatus-card-search/locatus-card-search.component";
import { LocatusPaginationComponent } from "./locatus/locatus-pagination/locatus-pagination.component";
import { LocatusMobileCardHeaderActionsComponent } from "./locatus/locatus-mobile-card-header-actions/locatus-mobile-card-header-actions.component";

import { PaymentsComponent } from "../pages/payments/payments.component";
import { DistinctTableModule } from "distinct-table";
import { LocatusCurrencyPipe } from "./locatus/pipes/locatus-currency.pipe";

const BASE_MODULES = [CommonModule, FormsModule, ReactiveFormsModule];

const NB_MODULES = [
  NbCardModule,
  NbLayoutModule,
  NbTabsetModule,
  NbRouteTabsetModule,
  NbMenuModule,
  NbUserModule,
  NbActionsModule,
  NbSearchModule,
  NbSidebarModule,
  NbCheckboxModule,
  NbPopoverModule,
  NbContextMenuModule,
  NgbModule,
  NbSecurityModule, // *nbIsGranted directive,
  NbProgressBarModule,
  NbSpinnerModule
];

const COMPONENTS = [
  SwitcherComponent,
  LayoutDirectionSwitcherComponent,
  ThemeSwitcherComponent,
  ThemeSwitcherListComponent,
  HeaderComponent,
  FooterComponent,
  SearchInputComponent,
  ThemeSettingsComponent,
  TinyMCEComponent,
  OneColumnLayoutComponent,
  SampleLayoutComponent,
  ThreeColumnsLayoutComponent,
  TwoColumnsLayoutComponent
];

const ENTRY_COMPONENTS = [ThemeSwitcherListComponent];

const PIPES = [
  CapitalizePipe,
  PluralPipe,
  RoundPipe,
  TimingPipe,
  NumberWithCommasPipe
];

const NB_THEME_PROVIDERS = [
  ...NbThemeModule.forRoot(
    {
      name: "default"
    },
    [DEFAULT_THEME, COSMIC_THEME, CORPORATE_THEME]
  ).providers,
  ...NbSidebarModule.forRoot().providers,
  ...NbMenuModule.forRoot().providers
];

@NgModule({
  imports: [
    ...BASE_MODULES,
    ...NB_MODULES,
    NgSelectModule,
    DistinctTableModule
  ],
  exports: [
    ...BASE_MODULES,
    ...NB_MODULES,
    ...COMPONENTS,
    ...PIPES,
    LocatusCurrencyPipe,
    LocatusCardHeaderActionsComponent,
    LocatusFiltersComponent,
    LocatusCardSearchComponent,
    LocatusPaginationComponent,
    LocatusMobileCardHeaderActionsComponent,
    PaymentsComponent
  ],
  declarations: [
    ...COMPONENTS,
    ...PIPES,
    LocatusCurrencyPipe,
    PaymentsComponent,
    LocatusSelectPropertyComponent,
    LocatusCardHeaderActionsComponent,
    LocatusFiltersComponent,
    LocatusCardSearchComponent,
    LocatusPaginationComponent,
    LocatusMobileCardHeaderActionsComponent
  ],
  entryComponents: [...ENTRY_COMPONENTS, PaymentsComponent]
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: ThemeModule,
      providers: [...NB_THEME_PROVIDERS]
    };
  }
}

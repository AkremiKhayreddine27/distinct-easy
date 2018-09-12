import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { PagesComponent } from "./pages.component";
import { NotFoundComponent } from "./miscellaneous/not-found/not-found.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      {
        path: "dashboard",
        component: DashboardComponent
      },
      {
        path: "properties",
        loadChildren: "./properties/properties.module#PropertiesModule"
      },
      {
        path: "contacts",
        loadChildren: "./contacts/contacts.module#ContactsModule"
      },
      {
        path: "reservations",
        loadChildren: "./reservations/reservations.module#ReservationsModule"
      },
      {
        path: "finances",
        loadChildren: "./finances/finances.module#FinancesModule"
      },
      {
        path: "categories",
        loadChildren: "./services/services.module#ServicesModule"
      },
      {
        path: "documents",
        loadChildren: "./documents/documents.module#DocumentsModule"
      },
      {
        path: "miscellaneous",
        loadChildren: "./miscellaneous/miscellaneous.module#MiscellaneousModule"
      },
      {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full"
      },
      {
        path: "**",
        component: NotFoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}

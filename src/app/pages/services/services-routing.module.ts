import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CategoriesComponent } from "./categories/categories.component";
import { ServicesComponent } from "./services.component";

const routes: Routes = [
  {
    path: "",
    component: CategoriesComponent
  },
  {
    path: "services",
    component: ServicesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule {}

export const routedComponents = [CategoriesComponent, ServicesComponent];

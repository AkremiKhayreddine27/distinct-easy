import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import * as serviceReference from "../../../../@core/data/references/services.reference";
import { Store } from "@ngrx/store";
import * as fromStore from "../../../../@core/store";

@Component({
  selector: "ngx-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.scss"]
})
export class CategoryComponent implements OnInit {
  @Input()
  subCategory;

  isCollapsed = true;

  constructor(
    public store: Store<fromStore.LocatusState>,
    private router: Router
  ) {}

  ngOnInit() {}

  getTypes(subCategoryId) {
    return serviceReference.getTypes(subCategoryId);
  }

  navigate(route, type) {
    this.store.dispatch(new fromStore.SelectServiceType(type));
    this.store.dispatch(new fromStore.SelectServiceCategory(this.subCategory));
    //this.servicesService.setCurrentType(type);
    //this.servicesService.setCurrentCategory(this.subCategory);
    this.router.navigateByUrl("/pages/categories/" + route);
  }
}

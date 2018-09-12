import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import * as serviceReference from "../../../@core/data/references/services.reference";

@Component({
  selector: "ngx-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.scss"]
})
export class CategoriesComponent implements OnInit {
  headerActions = [
    {
      title: "List",
      type: "link",
      icon: "fa fa-list",
      clickAction: "show",
      displayInMobile: true
    }
  ];

  public categories;

  constructor(private router: Router) {}

  ngOnInit() {
    this.categories = serviceReference.categories;
  }

  getSubcategories(categoryId) {
    return serviceReference.getSubcategories(categoryId);
  }

  handleHeaderEvent(event) {
    this[event.action]();
  }

  show() {
    this.router.navigate(["/pages/categories/services"]);
  }
}

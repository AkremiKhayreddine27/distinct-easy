import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import * as fromStore from "../../@core/store";

@Component({
  selector: "ngx-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  constructor(private store: Store<fromStore.LocatusState>) {}

  ngOnInit() {
    this.store
      .select<any>(fromStore.getSelectedProperty)
      .subscribe(property => {
        const reservationsFiltersConf = {
          filters: [
            {
              field: "property",
              search: property.id.toString(),
              filter: function(cell: any, search: any) {
                return cell.id.toString() === search;
              }
            }
          ],
          andOperator: false
        };
        this.store.dispatch(
          new fromStore.LoadReservations(reservationsFiltersConf)
        );
        const paymentsFiltersConf = {
          filters: [
            {
              field: "propertyId",
              search: property.id.toString(),
              filter: function(cell: any, search: any) {
                return cell.toString() === search;
              }
            }
          ],
          andOperator: false
        };
        this.store.dispatch(new fromStore.LoadPayments(paymentsFiltersConf));
      });
  }
}

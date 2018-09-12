import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import * as fromStore from "../@core/store";
import { FilterConf, Pagination } from "../@core/store/helpers";
import { distinctUntilChanged, delay } from "rxjs/operators";

export class LocatusIndexComponent {
  headerConfig = [];

  /**
   * Data
   */
  items: any[];
  data$: Observable<any[]>;
  loadAction;
  deleteAction;
  getData;
  getPagination;
  getCount;
  getLoaded;
  getLoading;
  pagination$: Observable<Pagination>;
  loaded$: Observable<boolean>;
  total$: Observable<number>;
  loading$: Observable<boolean>;

  /**
   * Filters
   */
  isFilterCollapsed = true;
  filtersConf: FilterConf = { filters: [], andOperator: true };
  filters: any[];

  /**
   * Search
   */
  isSearching = false;
  searchFields: string[];

  /**
   * Select
   */
  selectedData: any[] = [];
  allSelected: any = { type: "event", checked: false };

  constructor(public store: Store<fromStore.LocatusState>) {}

  init() {
    this.initFilters();
    this.resetHeaderConfig();
    this.total$ = this.store.select<any>(this.getCount);
    this.pagination$ = this.store.select<any>(this.getPagination);
    this.loaded$ = this.store.select<any>(this.getLoaded);
    this.data$ = this.store.select(this.getData).pipe(delay(1000));
    this.store.dispatch(
      new this.loadAction(this.filtersConf, [], { page: 1, perPage: 10 })
    );
    this.data$.pipe(distinctUntilChanged()).subscribe(items => {
      this.items = items;
    });
  }

  initFilters() {}

  handleHeaderActionClicked(action) {
    this[action]();
  }

  handleHeaderDropdownActionClicked(action) {
    this[action.item.title]();
  }

  export() {}

  search() {
    this.isFilterCollapsed = true;
    this.isSearching = true;
  }

  filter() {
    this.isFilterCollapsed = !this.isFilterCollapsed;
  }

  onSearch(filters: FilterConf) {
    this.filtersConf = filters;
    if (filters.filters.length === 0) {
      this.resetFilters();
    }
    this.store.dispatch(
      new this.loadAction({ ...this.filtersConf }, [], { page: 1, perPage: 10 })
    );
  }

  paginate(pagination: Pagination) {
    this.store.dispatch(
      new this.loadAction({ ...this.filtersConf }, [], { ...pagination })
    );
  }

  resetFilters() {}

  handleFiltersChanged(event: { filters: any[]; config: any[] }) {
    this.filtersConf = { filters: event.filters, andOperator: true };
    this.store.dispatch(
      new this.loadAction({ ...this.filtersConf }, [], { page: 1, perPage: 10 })
    );
  }

  handleSelectAllChanged($event) {
    this.allSelected = { type: "event", checked: this.allSelected.checked };
    if (this.allSelected.checked) {
      this.selectedData = this.items;
    } else {
      this.selectedData = [];
      this.resetHeaderConfig();
    }
  }

  handleSelectRowChanged(event) {
    this.changeHeaderConfig();
    if (event.checked) {
      this.selectedData.push(event.row);
    } else {
      this.selectedData = this.selectedData.filter(item => {
        return item.id !== event.row.id;
      });
    }
    this.allSelected = {
      type: "change",
      checked: this.selectedData.length === this.items.length
    };
    if (this.selectedData.length === 0) {
      this.resetHeaderConfig();
    }
  }

  deleteSelected() {
    this.selectedData.map(item => {
      this.store.dispatch(new this.deleteAction(item.id));
    });
    this.selectedData = [];
    this.allSelected = false;
    this.resetHeaderConfig();
  }

  resetHeaderConfig() {}

  changeHeaderConfig() {}
}

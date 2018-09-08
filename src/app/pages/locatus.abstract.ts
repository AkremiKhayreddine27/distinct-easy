import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromStore from '../@core/store';
import { FilterConf, Pagination } from '../@core/store/helpers';

export class LocatusIndexComponent {

    /**
     * Data
     */
    data$: Observable<any[]>;
    loadAction;
    getData;
    getPagination;
    getCount;
    getLoaded;
    pagination$: Observable<Pagination>;
    loaded$: Observable<boolean>;
    total$: Observable<number>;

    /**
     * Filters
     */
    isFilterCollapsed = true;
    filtersConf: FilterConf;
    filters: any[];

    /**
     * Search
     */
    isSearching = false;
    searchFields: string[];

    constructor(public store: Store<fromStore.LocatusState>) { }

    init() {
        this.initFilters();
        this.total$ = this.store.select<any>(this.getCount);
        this.pagination$ = this.store.select<any>(this.getPagination);
        this.loaded$ = this.store.select<any>(this.getLoaded);
        this.data$ = this.store.select(this.getData);
        this.store.dispatch(new this.loadAction({ filters: [], andOperator: true }, [], { page: 1, perPage: 10 }));
    }

    initFilters() { }

    handleHeaderActionClicked(action) {
        this[action]();
    }

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
        this.store.dispatch(new this.loadAction({ ...this.filtersConf }, [], { page: 1, perPage: 10 }));
    }

    paginate(pagination: Pagination) {
        this.store.dispatch(new this.loadAction({ ...this.filtersConf }, [], { ...pagination }));
    }

    resetFilters() {

    }

    handleFiltersChanged(event: { filters: any[], config: any[] }) {
        this.filtersConf = { filters: event.filters, andOperator: true };
        this.store.dispatch(new this.loadAction({ ...this.filtersConf }, [], { page: 1, perPage: 10 }));
    }

}
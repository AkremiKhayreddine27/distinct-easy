import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import * as dateFns from 'date-fns';

@Component({
  selector: 'ngx-locatus-filters',
  templateUrl: './locatus-filters.component.html',
  styleUrls: ['./locatus-filters.component.scss']
})
export class LocatusFiltersComponent implements OnInit {

  @Input() config: any[];

  @ViewChild('ngxDateDrop')
  private ngxDateDrop;

  @Output() filtersChanged: EventEmitter<{ filters: any[], config: any[] }> = new EventEmitter();

  @Output() action: EventEmitter<{ action: string, data: any }> = new EventEmitter();

  filters = [];

  constructor() { }

  ngOnInit() {
    this.initFilters();
  }

  initFilters() {
    this.config.map(filter => {
      if (filter.element || filter.elements) {
        this.setFilter(filter.field, filter.callback, filter.element, filter.name);
      }
    });
  }

  onClear(filter: any) {
    this.setFilter(filter.field, filter.callback, null, filter.name);
    if (filter.action) {
      this.callAction(filter.action, null);
    }
  }

  reset() {
    this.config = this.config.map(filter => {
      if (filter.elements) {
        filter.element = filter.elements[0];
      }
      return filter;
    });
    if (this.ngxDateDrop) {
      this.ngxDateDrop.cancel();
    }
    this.filters = [];
  }

  callActionAndSetFilter(field, callback, action, filter, name) {
    this.callAction(action, filter);
    this.setFilter(field, callback, filter, name);
  }

  callAction(action, property) {
    if (property) {
      this.action.emit({ action: action, data: property });
    }
  }

  applyFilter(filter, selectValue, filtervalue) {
    let exist = this.filters.find(f => {
      return f.field === filter
    });
    if (exist) {
      this.filters = this.filters.map(f => {
        if (f.field === filter) {
          f = filtervalue;
        }
        return f;
      });
    } else {
      if (selectValue) {
        this.filters.push(filtervalue);
      }
    }
  }

  /**
   * to do
   * only emit changed values
   */
  setFilter(field, callback, filter, name) {
    this.config = this.config.map(f => {
      if (f.name === name) {
        f.element = filter;
      }
      return f;
    });
    const query = filter && filter.id ? filter.id.toString() : '';
    this.applyFilter(field, filter, {
      field: field,
      search: query,
      filter: callback
    });
    this.filtersChanged.emit({ filters: this.filters, config: this.config });
  }

  setGroupFilter(field, callback, filter, name) {
    this.config = this.config.map(f => {
      if (f.name === name) {
        f.element = filter;
      }
      return f;
    });
    const query = filter && filter.id ? filter.id.toString() : filter ? filter.value : '';
    this.applyFilter(field, filter, {
      field: field,
      search: query,
      filter: callback
    });
    this.filtersChanged.emit({ filters: this.filters, config: this.config });
  }

  dateChanged(from: Date, to: Date) {
    if (from || to) {
      from = dateFns.parse(from.getFullYear() + '-' + from.getMonth() + '-' + from.getDate());
      if (to) {
        to = dateFns.parse(to.getFullYear() + '-' + to.getMonth() + '-' + to.getDate());
      }
      let toDate = to ? to : from;
      this.applyFilter('createdAt', { value: from.toString() }, {
        field: 'createdAt',
        search: from.toString(),
        filter: (cell: Date, search: any) => {
          cell = dateFns.parse(cell.getFullYear() + '-' + cell.getMonth() + '-' + cell.getDate());
          if (new Date(cell.toString()) >= from && new Date(cell.toString()) <= toDate) {
            return true;
          } else {
            return false;
          }
        }
      });
      this.filtersChanged.emit({ filters: this.filters, config: this.config });
    } else if (!from && !to) {
      this.filters = this.filters.filter(f => {
        return f.field !== 'createdAt'
      });
      this.filtersChanged.emit({ filters: this.filters, config: this.config });
    }
  }

}

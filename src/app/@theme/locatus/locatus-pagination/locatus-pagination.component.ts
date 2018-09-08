import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Pagination } from '../../../@core/store/helpers';
import { of } from 'rxjs/observable/of';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'ngx-locatus-pagination',
  templateUrl: './locatus-pagination.component.html',
  styleUrls: ['./locatus-pagination.component.scss']
})
export class LocatusPaginationComponent implements OnInit {

  @Input()
  paging: Pagination;

  @Input()
  total: number;

  @Output()
  changed: EventEmitter<Pagination> = new EventEmitter<Pagination>();

  totalPages: number = 0;

  selectItems;

  constructor() { }

  ngOnInit() {
    this.totalPages = Math.ceil(this.total / this.paging.perPage);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.paging || changes.total) {
      this.totalPages = Math.ceil(this.total / this.paging.perPage);
      this.getPerPagesList();
    }
  }

  setPage(page: number) {
    this.paging.page = page;
    this.changed.emit(this.paging);
  }

  getPerPagesList() {
    let items = [];
    for (let item = this.paging.perPage; item <= this.total; item = item + 5) {
      items.push(item);
    }
    this.selectItems = of(items).pipe(delay(500));
  }

  onChange($event) {
    this.changed.emit(this.paging);
  }

}

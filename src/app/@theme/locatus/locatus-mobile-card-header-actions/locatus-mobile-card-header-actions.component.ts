import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'ngx-locatus-mobile-card-header-actions',
  templateUrl: './locatus-mobile-card-header-actions.component.html',
  styleUrls: ['./locatus-mobile-card-header-actions.component.scss']
})
export class LocatusMobileCardHeaderActionsComponent implements OnInit {

  @Input() actions;

  @Input() defaultView;

  @Input() isFilterCollapsed;

  @Output() actionClicked: EventEmitter<{ action: string }> = new EventEmitter();

  @Output() dropdownItemClicked: EventEmitter<{ item: any }> = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  toggleClicked(action) {
    action.icon = action.firstIcon === action.icon ? action.secondIcon : action.firstIcon;
    this.actionClicked.emit({ action: action.clickAction });
  }

}

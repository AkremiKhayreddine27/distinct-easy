import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngx-locatus-card-header-actions',
  templateUrl: './locatus-card-header-actions.component.html',
  styleUrls: ['./locatus-card-header-actions.component.scss']
})
export class LocatusCardHeaderActionsComponent implements OnInit {

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

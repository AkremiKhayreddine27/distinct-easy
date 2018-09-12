import { Component, OnInit } from '@angular/core';
import { LocatusIndexComponent } from '../locatus.abstract';

import { Store } from "@ngrx/store";
import * as fromStore from "../../@core/store";
import { LoadProperties } from '../../@core/store/properties/properties.action';

@Component({
  selector: 'ngx-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent extends LocatusIndexComponent implements OnInit {

  headerConfig = [
    {
      title: "Chercher",
      type: "link",
      icon: "fa fa-search",
      clickAction: "search",
      displayInMobile: true
    },
    {
      title: "Filtrer",
      type: "link",
      icon: "fa fa-filter",
      clickAction: "filter",
      displayInMobile: false
    },
    {
      title: "Ajouter",
      type: "link",
      icon: "fa fa-plus",
      clickAction: "create",
      displayInMobile: false
    },
    {
      title: "Affichage",
      type: "toggle",
      icon: "nb-grid-a",
      clickAction: "toggleDisplay",
      displayInMobile: false,
      firstIcon: "nb-grid-a",
      secondIcon: "fa fa-list"
    },
    {
      title: "Autres",
      type: "dropdown",
      icon: "fa fa-ellipsis-h",
      dropdownItems: [
        {
          title: "import",
          action: "settings",
          icon: "fa fa-upload"
        },
        {
          title: "export",
          action: "settings",
          icon: "fa fa-download"
        }
      ],
      displayInMobile: false
    }
  ];

  searchFields: string[] = [
    "status.value",
    "lodger",
    "price.value",
    "balance.value"
  ];

  loadAction = fromStore.LoadProperties;
  getData = fromStore.getPaginatedSortedFiltredProperties;
  getPagination = fromStore.getPropertiesPagination;
  getCount = fromStore.getPropertiesCount;
  getLoaded = fromStore.getPropertiesLoaded;
  getLoading = fromStore.getPropertiesLoading;

  constructor(public store: Store<fromStore.LocatusState>) {
    super(store);
  }

  ngOnInit() {
    this.init();
  }

  handleFilter(action, data) {
    this[action](data);
  }

  initFilters() {
    this.filters = [];
  }

  resetFilters() {
  }

  resetHeaderConfig() {
    this.headerConfig = [
      {
        title: "Chercher",
        type: "link",
        icon: "fa fa-search",
        clickAction: "search",
        displayInMobile: true
      },
      {
        title: "Filtrer",
        type: "link",
        icon: "fa fa-filter",
        clickAction: "filter",
        displayInMobile: false
      },
      {
        title: "Ajouter",
        type: "link",
        icon: "fa fa-plus",
        clickAction: "create",
        displayInMobile: false
      },
      {
        title: "Affichage",
        type: "toggle",
        icon: "nb-grid-a",
        clickAction: "toggleDisplay",
        displayInMobile: false,
        firstIcon: "nb-grid-a",
        secondIcon: "fa fa-list"
      },
      {
        title: "Autres",
        type: "dropdown",
        icon: "fa fa-ellipsis-h",
        dropdownItems: [
          {
            title: "import",
            action: "settings",
            icon: "fa fa-upload"
          },
          {
            title: "export",
            action: "settings",
            icon: "fa fa-download"
          }
        ],
        displayInMobile: false
      }
    ];
  }

  changeHeaderConfig() {
    this.headerConfig = [
      {
        title: "Supprimer",
        type: "link",
        icon: "fa fa-trash",
        clickAction: "deleteSelected",
        displayInMobile: true
      },
      {
        title: "Exporter",
        type: "link",
        icon: "fa fa-download",
        clickAction: "exportSelected",
        displayInMobile: true
      }
    ];
  }

}

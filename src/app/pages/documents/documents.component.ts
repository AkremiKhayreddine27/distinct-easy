import { Component, OnInit } from '@angular/core';
import { LocatusIndexComponent } from '../locatus.abstract';

import * as documentReferences from '../../@core/data/references/documents.reference';

import { Store } from '@ngrx/store';
import * as fromStore from '../../@core/store';
import { TableConfig } from 'distinct-table';

@Component({
  selector: 'ngx-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent extends LocatusIndexComponent implements OnInit {

  headerConfig = [
    { title: 'Chercher', type: 'link', icon: 'fa fa-search', clickAction: 'search', displayInMobile: true },
    { title: 'Filtrer', type: 'link', icon: 'fa fa-filter', clickAction: 'filter', displayInMobile: false },
    { title: 'Ajouter', type: 'link', icon: 'fa fa-plus', clickAction: 'create', displayInMobile: false },
    {
      title: 'Affichage',
      type: 'toggle',
      icon: 'nb-grid-a',
      clickAction: 'toggleDisplay',
      displayInMobile: false,
      firstIcon: 'nb-grid-a',
      secondIcon: 'fa fa-list'
    },
    {
      title: 'Autres', type: 'dropdown', icon: 'fa fa-ellipsis-h', dropdownItems: [
        {
          title: 'Import',
          action: 'settings',
          icon: 'fa fa-upload',
        },
        {
          title: 'Export',
          action: 'settings',
          icon: 'fa fa-download',
        }
      ], displayInMobile: false
    }
  ];


  config: TableConfig<any> = {
    displayHeader: true,
    bordred: false,
    showActionsType: 'hover',
    alignDesktop: 'start',
    alignMobile: 'start',
    selectType: 'letters',
    imagePath: 'avatar',
    lettersPath: 'firstname',
    header: [
      {
        width: 'col-4',
        label: 'Nom',
        sort: {
          attributes: [
            { name: 'nom', path: 'title', direction: 'desc' },
          ]
        }
      },
      {
        width: 'col-2',
        label: 'Type',
        sort: {
          attributes: [
            { name: 'Type', path: 'type.value', direction: 'desc' },
          ]
        }
      },
      {
        width: 'col-2',
        label: 'Date',
        sort: {
          attributes: [
            { name: 'Date', path: 'createdAt', direction: 'desc' },
          ]
        }
      },
      {
        width: 'col-4',
        label: 'Catégorie',
        sort: {
          attributes: [
            { name: 'Categorie', path: 'nomenclature.title', direction: 'desc' },
          ]
        }
      }
    ],
    mobileHeader: [],
    cols: [
      {
        width: 'col-4',
        data: [
          {
            line: [
              {
                type: 'text',
                path: 'title'
              }
            ],
            align: true
          },
        ],
      },
      {
        width: 'col-2',
        data: [
          {
            line: [
              {
                type: 'text',
                path: 'type.value'
              }
            ],
            align: true
          }
        ],
      },
      {
        width: 'col-2',
        data: [
          {
            line: [
              {
                type: 'date',
                path: 'createdAt'
              },
            ],
            align: true
          },
        ],
      },
      {
        width: 'col-3',
        data: [
          {
            line: [
              {
                type: 'text',
                path: 'nomenclature.title'
              }
            ],
            align: false
          },
          {
            line: [
              {
                type: 'badge',
                path: 'nomenclatureType.value',
                badgeType: 'success'
              },
            ],
            align: true
          },
        ],
      },
    ],
    mobileCols: []
  };

  searchFields: string[] = ['email', 'phone'];

  loadAction = fromStore.LoadDocuments;
  getData = fromStore.getPaginatedSortedFiltredDocuments;
  getPagination = fromStore.getDocumentsPagination;
  getCount = fromStore.getDocumentsCount;
  getLoaded = fromStore.getDocumentsLoaded;

  constructor(public store: Store<fromStore.LocatusState>) {
    super(store);
  }

  ngOnInit() {
    this.init();
  }

  initFilters() {
    let selectedProperty;
    const properties$ = this.store.select(fromStore.getAllProperties);
    this.store.select(fromStore.getSelectedProperty).subscribe(property => {
      selectedProperty = property;
    });
    this.filters = [
      {
        name: 'property',
        type: 'select',
        field: 'propertyId',
        element: selectedProperty,
        elements: properties$,
        placeholder: 'Choisir un bien',
        bindLabel: 'title',
        callback: function (cell: any, search: any) {
          return cell.toString() === search;
        }
      },
      {
        name: 'type',
        type: 'select',
        field: 'type',
        placeholder: 'Choisir un type',
        elements: documentReferences.getTypes(),
        callback: function (cell: any, search: any) {
          return cell.id.toString() === search;
        }
      },
      {
        name: 'category',
        type: 'select',
        field: 'nomenclatureType',
        placeholder: 'Choisir une catégorie',
        elements: documentReferences.getCategoryTypes(),
        callback: function (cell: any, search: any) {
          return cell.id.toString() === search;
        }
      }
    ];
  }

  resetFilters() {
    let selectedProperty;
    this.store.select(fromStore.getSelectedProperty).subscribe(property => {
      selectedProperty = property;
    });
    this.filtersConf = {
      filters: [
        {
          field: 'propertyId',
          search: selectedProperty.id.toString(),
          filter: function (cell: any, search: any) {
            return cell.toString() === search
          }
        }
      ],
      andOperator: false,
    };
  }

}

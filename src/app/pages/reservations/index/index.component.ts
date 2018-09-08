import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TableConfig } from 'distinct-table';

import { Store } from '@ngrx/store';
import * as fromStore from '../../../@core/store';

import * as reservationReferences from '../../../@core/data/references/reservation.reference';
import { LocatusIndexComponent } from '../../locatus.abstract';
import { PaymentsComponent } from '../../payments/payments.component';


@Component({
  selector: 'ngx-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndexComponent extends LocatusIndexComponent implements OnInit {

  tableConfig: TableConfig<any> = {
    displayHeader: true,
    bordred: false,
    showActionsType: 'hover',
    alignDesktop: 'start',
    alignMobile: 'start',
    selectType: 'checkbox',
    imagePath: 'avatar',
    lettersPath: 'property.title',
    header: [
      {
        width: 'col-2',
        label: 'Bien',
        sort: {
          attributes: [
            { name: 'Bien', path: 'property.title', direction: 'desc' },
          ]
        }
      },
      {
        width: 'col-2',
        label: 'Locataire',
        sort: {
          attributes: [
            { name: 'Nom', path: 'lodger.firstname', direction: 'desc' },
            { name: 'Prénom', path: 'lodger.lastname', direction: 'desc' },
            { name: 'Numéro du téléphone', path: 'lodger.phone', direction: 'desc' },
          ]
        }
      },
      {
        width: 'col-2',
        label: 'Durée',
        sort: {
          attributes: [
            { name: 'Début', path: 'start', direction: 'desc' },
            { name: 'Fin', path: 'end', direction: 'desc' },
            { name: 'Nombre de nuitées', path: 'nbrNight', direction: 'desc' },
          ]
        }
      },
      {
        width: 'col-2',
        label: 'Status',
        sort: {
          attributes: [
            { name: 'Statut', path: 'status.value', direction: 'desc' },
          ]
        }
      },
      {
        width: 'col-3',
        label: 'Montant',
        sort: {
          attributes: [
            { name: 'Solde', path: 'price.value', direction: 'desc' },
            { name: 'Réglé', path: 'adjusted.value', direction: 'desc' },
          ]
        }
      },
      {
        width: 'col-1',
        label: ''
      }
    ],
    mobileHeader: [
      {
        width: 'col-4',
        label: 'Bien',
        sort: {
          attributes: [
            { name: 'Bien', path: 'property.title', direction: 'desc' },
          ]
        }
      },
      {
        width: 'col-4',
        label: 'Réservation',
        sort: {
          attributes: [
            { name: 'Nombre de nuitées', path: 'nbrNight', direction: 'desc' },
            { name: 'Statut', path: 'status.value', direction: 'desc' },
            { name: "Nombre d'adultes", path: 'nbrPets', direction: 'desc' },
          ]
        }
      },
      {
        width: 'col-4',
        label: 'Montant',
        sort: {
          attributes: [
            { name: 'Solde', path: 'price.value', direction: 'desc' },
            { name: 'Réglé', path: 'adjusted.value', direction: 'desc' },
          ]
        }
      },
    ],
    cols: [
      {
        width: 'col-2',
        data: [
          {
            line: [
              {
                type: 'text',
                path: 'property.title'
              },
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
                path: 'lodger.firstname'
              },
              {
                type: 'text',
                path: 'lodger.lastname'
              },
            ],
            align: true
          },
          {
            line: [
              {
                type: 'icon',
                icon: 'fa fa-phone'
              },
              {
                type: 'phone',
                path: 'lodger.phone'
              },
            ],
            align: true
          },
          {
            line: [
              {
                type: 'icon',
                icon: 'fa fa-users'
              },
              {
                type: 'text',
                path: 'nbrPets'
              },
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
                path: 'start'
              },
            ],
            align: true
          },
          {
            line: [
              {
                type: 'date',
                path: 'end'
              },
            ],
            align: true
          },
          {
            line: [
              {
                type: 'text',
                path: 'nbrNight'
              },
              {
                type: 'text',
                label: 'nuitées'
              },
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
                type: 'badge',
                path: 'status.value',
                badgePath: 'status.cssClass'
              }
            ],
            align: false
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
                label: 'Solde: '
              },
              {
                type: 'text',
                path: 'price.value'
              },
              {
                type: 'text',
                path: 'price.currency.symbol'
              }
            ],
            align: true
          },
          {
            line: [
              {
                type: 'text',
                label: 'Réglé: '
              },
              {
                type: 'text',
                path: 'adjusted.value'
              },
              {
                type: 'text',
                path: 'adjusted.currency.symbol'
              }
            ],
            align: true
          },
          {
            line: [
              {
                type: 'collapse',
                label: 'details',
                component: PaymentsComponent,
                getData: (id) => {
                  return {
                    data$: fromStore.getPaymentsByNomenclature(id, 'Réservation'),
                    pagination$: fromStore.getPaymentsPagination,
                    total$: fromStore.getPaymentsCount,
                    loaded$: fromStore.getPaymentsLoaded
                  };
                }
              }
            ],
            align: true
          },
        ],
      },
    ],
    mobileCols: [
      {
        width: 'col-4',
        data: [
          {
            line: [
              {
                type: 'text',
                path: 'property.title'
              },
            ],
            align: true
          },
        ],
      },
      {
        width: 'col-4',
        data: [
          {
            line: [
              {
                type: 'text',
                path: 'nbrNight'
              },
              {
                type: 'text',
                label: 'nuitées'
              }
            ],
            align: true
          },
          {
            line: [
              {
                type: 'badge',
                path: 'status.value',
                badgePath: 'status.cssClass'
              }
            ],
            align: true
          },
          {
            line: [
              {
                type: 'icon',
                icon: 'fa fa-users'
              },
              {
                type: 'text',
                path: 'nbrPets'
              }
            ],
            align: true
          },
        ]
      },
      {
        width: 'col-4',
        data: [
          {
            line: [
              {
                type: 'text',
                label: 'Solde: '
              },
              {
                type: 'text',
                path: 'price.value'
              },
              {
                type: 'text',
                path: 'price.currency.symbol'
              }
            ],
            align: true
          },
          {
            line: [
              {
                type: 'text',
                label: 'Réglé: ',
              },
              {
                type: 'text',
                path: 'adjusted.value'
              },
              {
                type: 'text',
                path: 'adjusted.currency.symbol'
              }
            ],
            align: true
          },
          {
            line: [
              {
                type: 'collapse',
                label: 'details',
                component: PaymentsComponent,
                getData: (id) => {
                  return this.store.select<any>(fromStore.getPaymentsByNomenclature(id, 'Réservation'));
                }
              }
            ],
            align: true
          },
        ]
      },
    ],
    desktopActions: [
      {
        type: 'icon',
        icon: 'fa fa-edit',
        calback: 'edit',
      },
      {
        type: 'dropdown',
        dropdownConfig: {
          toggle: {
            type: 'icon',
            icon: 'fa fa-ellipsis-v'
          },
          items: [
            {
              data: [
                {
                  type: 'icon',
                  icon: 'fa fa-trash'
                },
                {
                  type: 'text',
                  label: 'Delete'
                }
              ],
              calback: 'delete'
            }
          ]
        }
      }
    ],
    mobileActions: [
      {
        type: 'dropdown',
        dropdownConfig: {
          toggle: {
            type: 'icon',
            icon: 'fa fa-ellipsis-v'
          },
          items: [
            {
              data: [
                {
                  type: 'icon',
                  icon: 'fa fa-trash'
                },
                {
                  type: 'text',
                  label: 'Delete'
                }
              ],
              calback: 'delete'
            }
          ]
        }
      }
    ]
  };

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

  searchFields: string[] = ['status.value', 'lodger', 'price.value', 'balance.value'];

  loadAction = fromStore.LoadReservations;
  getData = fromStore.getPaginatedSortedFiltredReservations;
  getPagination = fromStore.getReservationsPagination;
  getCount = fromStore.getReservationsCount;
  getLoaded = fromStore.getReservationsLoaded;


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
        field: 'property',
        element: selectedProperty,
        elements: properties$,
        placeholder: 'Choisir un bien',
        bindLabel: 'title',
        callback: function (cell: any, search: any) {
          return cell.id.toString() === search;
        }
      },
      {
        name: 'status',
        type: 'select',
        field: 'status',
        placeholder: 'Choisir un statut',
        elements: reservationReferences.getStatuses(),
        callback: function (cell: any, search: any) {
          return cell.id.toString() === search;
        }
      },
      {
        name: 'platform',
        type: 'select',
        field: 'platform',
        placeholder: 'Choisir une platform',
        elements: reservationReferences.getPlatforms(),
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
          field: 'property',
          search: selectedProperty.id.toString(),
          filter: function (cell: any, search: any) {
            return cell.id.toString() === search
          }
        }
      ],
      andOperator: false,
    };
  }

}

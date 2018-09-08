import { Component, OnInit } from '@angular/core';

import { TableConfig } from 'distinct-table';
import { LocatusIndexComponent } from '../locatus.abstract';

import { Store } from '@ngrx/store';
import * as fromStore from '../../@core/store';

@Component({
  selector: 'ngx-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent extends LocatusIndexComponent implements OnInit {

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
        width: 'col-3',
        label: 'Name',
        sort: {
          attributes: [
            { name: 'First name', path: 'firstname', direction: 'desc' },
            { name: 'Last name', path: 'lastname', direction: 'desc' },
          ]
        }
      },
      {
        width: 'col-3',
        label: 'E-mail',
        sort: {
          attributes: [
            { name: 'E-mail', path: 'email', direction: 'desc' },
          ]
        }
      },
      {
        width: 'col-2',
        label: 'Phone',
        sort: {
          attributes: [
            { name: 'Phone', path: 'phone', direction: 'desc' },
          ]
        }
      },
      {
        width: 'col-3',
        label: 'Address',
        sort: {
          attributes: [
            { name: 'Address', path: 'location.address', direction: 'desc' },
            { name: 'Postal code', path: 'location.postcode', direction: 'desc' },
            { name: 'City', path: 'location.city', direction: 'desc' },
            { name: 'Country', path: 'location.country', direction: 'desc' },
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
        width: 'col-12',
        label: 'Contacts',
        sort: {
          attributes: [
            { name: 'First name', path: 'firstname', direction: 'desc' },
            { name: 'Last name', path: 'lastname', direction: 'desc' },
            { name: 'Phone', path: 'phone', direction: 'desc' },
            { name: 'E-mail', path: 'email', direction: 'desc' }
          ]
        }
      },
    ],
    cols: [
      {
        width: 'col-3',
        data: [
          {
            line: [
              {
                type: 'text',
                path: 'firstname'
              },
              {
                type: 'text',
                path: 'lastname'
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
                type: 'icon',
                icon: 'fa fa-envelope'
              },
              {
                type: 'email',
                path: 'email'
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
                type: 'icon',
                icon: 'fa fa-phone'
              },
              {
                type: 'phone',
                path: 'phone'
              },
            ],
            align: true
          },
          /*
          {
            line: [
              {
                type: 'collapse',
                label: 'details',
                component: AppComponent,
                getData: (id) => {
                  return of(this.users.find(user => {
                    return user.id === id;
                  }));
                }
              }
            ],
            align: true
          },
          */
        ],
      },
      {
        width: 'col-3',
        data: [
          {
            line: [
              {
                type: 'text',
                path: 'location.address'
              }
            ],
            align: false
          },
          {
            line: [
              {
                type: 'text',
                path: 'location.postcode'
              },
              {
                type: 'text',
                path: 'location.city'
              },
            ],
            align: true
          },
          {
            line: [
              {
                type: 'text',
                path: 'location.state'
              },
              {
                type: 'text',
                path: 'location.country'
              }
            ],
            align: true
          }
        ],
      },
      {
        width: 'col-1',
        data: [
          {
            line: [
              {
                type: 'action',
                action: {
                  type: 'icon',
                  icon: 'fa fa-edit',
                  calback: 'edit'
                }
              },
              {
                type: 'action',
                action: {
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
              }
            ],
            align: true
          }
        ]
      }
    ],
    mobileCols: [
      {
        width: 'col-12',
        data: [
          {
            line: [
              {
                type: 'text',
                path: 'firstname'
              },
              {
                type: 'text',
                path: 'lastname'
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
                path: 'phone'
              },
            ],
            align: true
          },
          {
            line: [
              {
                type: 'icon',
                icon: 'fa fa-envelope'
              },
              {
                type: 'email',
                path: 'email'
              },
            ],
            align: true
          },
        ],
      },
    ]
  };

  searchFields: string[] = ['email', 'phone'];

  loadAction = fromStore.LoadContacts;
  getData = fromStore.getPaginatedSortedFiltredContacts;
  getPagination = fromStore.getContactsPagination;
  getCount = fromStore.getContactsCount;
  getLoaded = fromStore.getContactsLoaded;

  constructor(public store: Store<fromStore.LocatusState>) {
    super(store);
  }

  ngOnInit() {
    this.init();
  }

  initFilters() {
    this.filters = [];
  }

}

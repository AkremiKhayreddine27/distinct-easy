import { Component, OnInit, OnDestroy } from "@angular/core";

import { TableConfig } from "distinct-table";

import { Store } from "@ngrx/store";
import * as fromStore from "../../@core/store";

import * as servicesReferences from "../../@core/data/references/services.reference";
import { LocatusIndexComponent } from "../locatus.abstract";
import { PaymentsComponent } from "../payments/payments.component";
import { of } from "rxjs/observable/of";
import { delay } from "rxjs/operators";

@Component({
  selector: "ngx-services",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.scss"]
})
export class ServicesComponent extends LocatusIndexComponent
  implements OnInit, OnDestroy {
  tableConfig: TableConfig<any> = {
    displayHeader: true,
    bordred: false,
    showActionsType: "hover",
    alignDesktop: "start",
    alignMobile: "start",
    selectType: "checkbox",
    imagePath: "avatar",
    lettersPath: "property.title",
    header: [
      {
        width: "col-2",
        label: "Bien",
        sort: {
          attributes: [
            { name: "Bien", path: "property.title", direction: "desc" }
          ]
        }
      },
      {
        width: "col-2",
        label: "Prestataire",
        sort: {
          attributes: [
            { name: "Nom", path: "provider.firstname", direction: "desc" },
            { name: "Prénom", path: "provider.lastname", direction: "desc" },
            {
              name: "Numéro du téléphone",
              path: "provider.phone",
              direction: "desc"
            }
          ]
        }
      },
      {
        width: "col-2",
        label: "Durée",
        sort: {
          attributes: [
            { name: "Début", path: "start", direction: "desc" },
            { name: "Fin", path: "end", direction: "desc" }
          ]
        }
      },
      {
        width: "col-2",
        label: "Catégorie",
        sort: {
          attributes: [
            { name: "Catégorie", path: "status.value", direction: "desc" }
          ]
        }
      },
      {
        width: "col-2",
        label: "Status",
        sort: {
          attributes: [
            { name: "Statut", path: "status.value", direction: "desc" }
          ]
        }
      },
      {
        width: "col-2",
        label: "Montant",
        sort: {
          attributes: [
            { name: "Solde", path: "price.value", direction: "desc" }
          ]
        }
      }
    ],
    mobileHeader: [
      {
        width: "col-4",
        label: "Bien",
        sort: {
          attributes: [
            { name: "Bien", path: "property.title", direction: "desc" }
          ]
        }
      },
      {
        width: "col-4",
        label: "Service",
        sort: {
          attributes: [
            { name: "Statut", path: "status.value", direction: "desc" }
          ]
        }
      },
      {
        width: "col-4",
        label: "Montant",
        sort: {
          attributes: [
            { name: "Solde", path: "price.value", direction: "desc" }
          ]
        }
      }
    ],
    cols: [
      {
        width: "col-2",
        data: [
          {
            line: [
              {
                type: "text",
                path: "property.title"
              }
            ],
            align: true
          }
        ]
      },
      {
        width: "col-2",
        data: [
          {
            line: [
              {
                type: "text",
                path: "provider.firstname"
              },
              {
                type: "text",
                path: "provider.lastname"
              }
            ],
            align: true
          },
          {
            line: [
              {
                type: "icon",
                icon: "fa fa-phone"
              },
              {
                type: "phone",
                path: "provider.phone"
              }
            ],
            align: true
          }
        ]
      },
      {
        width: "col-2",
        data: [
          {
            line: [
              {
                type: "date",
                path: "start"
              }
            ],
            align: true
          },
          {
            line: [
              {
                type: "date",
                path: "end"
              }
            ],
            align: true
          }
        ]
      },
      {
        width: "col-2",
        data: [
          {
            line: [
              {
                type: "text",
                path: "category.title"
              }
            ],
            align: false
          },
          {
            line: [
              {
                type: "text",
                path: "type.title"
              }
            ],
            align: false
          }
        ]
      },
      {
        width: "col-2",
        data: [
          {
            line: [
              {
                type: "badge",
                path: "status.value",
                badgePath: "status.cssClass"
              }
            ],
            align: false
          }
        ]
      },
      {
        width: "col-2",
        data: [
          {
            line: [
              {
                type: "text",
                label: "Solde: "
              },
              {
                type: "text",
                path: "price.value"
              },
              {
                type: "text",
                path: "price.currency.symbol"
              }
            ],
            align: true
          },
          {
            line: [
              {
                type: "collapse",
                label: "details",
                component: PaymentsComponent,
                getData: id => {
                  return {
                    data$: fromStore.getPaymentsByNomenclature(id, "Service"),
                    pagination$: fromStore.getPaymentsPagination,
                    total$: fromStore.getPaymentsCount,
                    loaded$: fromStore.getPaymentsLoaded
                  };
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
        width: "col-4",
        data: [
          {
            line: [
              {
                type: "text",
                path: "property.title"
              }
            ],
            align: true
          }
        ]
      },
      {
        width: "col-4",
        data: [
          {
            line: [
              {
                type: "date",
                path: "start"
              }
            ],
            align: true
          },
          {
            line: [
              {
                type: "date",
                path: "end"
              }
            ],
            align: true
          },
          {
            line: [
              {
                type: "text",
                path: "provider.firstname"
              },
              {
                type: "text",
                path: "provider.lastname"
              }
            ],
            align: true
          },
          {
            line: [
              {
                type: "badge",
                path: "status.value",
                badgePath: "status.cssClass"
              }
            ],
            align: true
          }
        ]
      },
      {
        width: "col-4",
        data: [
          {
            line: [
              {
                type: "text",
                label: "Solde: "
              },
              {
                type: "text",
                path: "price.value"
              },
              {
                type: "text",
                path: "price.currency.symbol"
              }
            ],
            align: true
          },
          {
            line: [
              {
                type: "collapse",
                label: "details",
                component: PaymentsComponent,
                getData: id => {
                  return {
                    data$: fromStore.getPaymentsByNomenclature(
                      id,
                      "Réservation"
                    ),
                    pagination$: fromStore.getPaymentsPagination,
                    total$: fromStore.getPaymentsCount,
                    loaded$: fromStore.getPaymentsLoaded
                  };
                }
              }
            ],
            align: true
          }
        ]
      }
    ],
    desktopActions: [
      {
        type: "icon",
        icon: "fa fa-edit",
        calback: "edit"
      },
      {
        type: "dropdown",
        dropdownConfig: {
          toggle: {
            type: "icon",
            icon: "fa fa-ellipsis-v"
          },
          items: [
            {
              data: [
                {
                  type: "icon",
                  icon: "fa fa-trash"
                },
                {
                  type: "text",
                  label: "Delete"
                }
              ],
              calback: "delete"
            }
          ]
        }
      }
    ],
    mobileActions: [
      {
        type: "dropdown",
        dropdownConfig: {
          toggle: {
            type: "icon",
            icon: "fa fa-ellipsis-v"
          },
          items: [
            {
              data: [
                {
                  type: "icon",
                  icon: "fa fa-trash"
                },
                {
                  type: "text",
                  label: "Delete"
                }
              ],
              calback: "delete"
            }
          ]
        }
      }
    ]
  };

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

  loadAction = fromStore.LoadServices;
  deleteAction = fromStore.DeleteService;
  getData = fromStore.getPaginatedSortedFiltredServices;
  getPagination = fromStore.getServicesPagination;
  getCount = fromStore.getServicesCount;
  getLoaded = fromStore.getServicesLoaded;
  getLoading = fromStore.getServicesLoading;

  constructor(public store: Store<fromStore.LocatusState>) {
    super(store);
  }

  ngOnInit() {
    this.init();
  }

  ngOnDestroy() {
    this.store.dispatch(new fromStore.SelectServiceType(null));
    this.store.dispatch(new fromStore.SelectServiceCategory(null));
  }

  onCategoryChange(category) {
    const filters = this.filters.map(filter => {
      if (filter.name === "type") {
        filter.element = null;
        if (category) {
          filter.elements = of(servicesReferences.getTypes(category.id)).pipe(
            delay(500)
          );
        } else {
          filter.elements = of([]).pipe(delay(500));
        }
      }
      return filter;
    });
    this.filters = [...filters];
  }

  handleFilter(action, data) {
    this[action](data);
  }

  initFilters() {
    let selectedProperty;
    let category;
    let type;
    let types = [];
    const properties$ = this.store.select(fromStore.getAllProperties);
    this.store.select(fromStore.getSelectedProperty).subscribe(property => {
      selectedProperty = property;
    });
    this.store.select(fromStore.getSelectedServiceCategory).subscribe(c => {
      category = c;
      if (c) {
        types = servicesReferences.getTypes(category.id);
      }
    });
    this.store.select(fromStore.getSelectedServiceType).subscribe(t => {
      type = t;
    });
    this.filters = [
      {
        name: "property",
        type: "select",
        field: "property",
        element: selectedProperty,
        elements: properties$,
        placeholder: "Choisir un bien",
        bindLabel: "title",
        callback: function(cell: any, search: any) {
          return cell.id.toString() === search;
        }
      },
      {
        name: "status",
        type: "select",
        field: "status",
        placeholder: "Choisir un statut",
        elements: servicesReferences.getStatuses(),
        callback: function(cell: any, search: any) {
          return cell.id.toString() === search;
        }
      },
      {
        name: "category",
        type: "select",
        field: "category",
        placeholder: "Choisir une categorie",
        bindLabel: "title",
        action: "onCategoryChange",
        element: category,
        elements: of(servicesReferences.getSubcategories()).pipe(delay(500)),
        callback: function(cell: any, search: any) {
          return cell.id.toString() === search;
        }
      },
      {
        name: "type",
        type: "select",
        field: "type",
        placeholder: "Choisir un type",
        bindLabel: "title",
        element: type,
        elements: of(types).pipe(delay(500)),
        callback: function(cell: any, search: any) {
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
          field: "property",
          search: selectedProperty.id.toString(),
          filter: function(cell: any, search: any) {
            return cell.id.toString() === search;
          }
        }
      ],
      andOperator: false
    };
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

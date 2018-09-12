import { Component, OnInit, Input, ChangeDetectorRef, AfterViewInit, ChangeDetectionStrategy } from "@angular/core";
import { Payment } from "../../@core/data/models";
import { TableConfig } from "distinct-table";
import { LocatusIndexComponent } from "../locatus.abstract";
import { Store } from "@ngrx/store";
import * as fromStore from "../../@core/store";

/**
 * To do
 * get data !!!!
 */

@Component({
  selector: "ngx-payments",
  templateUrl: "./payments.component.html",
  styleUrls: ["./payments.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentsComponent extends LocatusIndexComponent implements OnInit, AfterViewInit {
  @Input()
  data: any;

  @Input()
  nomenclature: any;

  loadAction = fromStore.LoadPayments;
  deleteAction = fromStore.DeletePayment;

  getData;
  getPagination;
  getCount;
  getLoaded;
  getLoading = fromStore.getPaymentsLoading;

  headerConfig = [];

  config: TableConfig<any> = {
    displayHeader: true,
    bordred: false,
    showActionsType: "hover",
    alignDesktop: "start",
    alignMobile: "start",
    selectType: "letters",
    imagePath: "avatar",
    lettersPath: "firstname",
    header: [
      {
        width: "col-2",
        label: "Echéance",
        sort: {
          attributes: [
            { name: "Echéance", path: "deadlineDate", direction: "desc" }
          ]
        }
      },
      {
        width: "col-2",
        label: "Qui à Qui",
        sort: {
          attributes: [
            { name: "Payeur", path: "payer.firstname", direction: "desc" },
            { name: "Bénificiaire", path: "payee.firstname", direction: "desc" }
          ]
        }
      },
      {
        width: "col-2",
        label: "Montant",
        sort: {
          attributes: [
            { name: "Montant", path: "price.value", direction: "desc" }
          ]
        }
      },
      {
        width: "col-2",
        label: "Statut",
        sort: {
          attributes: [
            { name: "Statut", path: "status.value", direction: "desc" }
          ]
        }
      },
      {
        width: "col-2",
        label: "Type",
        sort: {
          attributes: [{ name: "Type", path: "type.value", direction: "desc" }]
        }
      },
      {
        width: "col-2",
        label: "Mode",
        sort: {
          attributes: [
            { name: "Mode", path: "method.value", direction: "desc" }
          ]
        }
      }
    ],
    mobileHeader: [
      {
        width: "col-4",
        label: "Qui à Qui",
        sort: {
          attributes: [
            { name: "Payeur", path: "payer.firstname", direction: "desc" },
            { name: "Bénificiaire", path: "payee.firstname", direction: "desc" }
          ]
        }
      },
      {
        width: "col-4",
        label: "Paiement",
        sort: {
          attributes: [
            { name: "Date", path: "deadlineDate", direction: "desc" },
            { name: "Statut", path: "status.value", direction: "desc" },
            { name: "Montant", path: "price.value", direction: "desc" }
          ]
        }
      },
      {
        width: "col-4",
        label: "Mode",
        sort: {
          attributes: [
            { name: "Mode", path: "method.value", direction: "desc" }
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
                type: "date",
                path: "deadlineDate"
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
                label: "De"
              },
              {
                type: "text",
                path: "payer.firstname"
              },
              {
                type: "text",
                path: "payer.lastname"
              }
            ],
            align: true
          },
          {
            line: [
              {
                type: "text",
                label: "à"
              },
              {
                type: "text",
                path: "payee.firstname"
              },
              {
                type: "text",
                path: "payee.lastname"
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
                path: "price.value"
              },
              {
                type: "text",
                path: "price.currency.symbol"
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
                path: "type.value"
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
                path: "method.value"
              }
            ],
            align: false
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
                label: "De"
              },
              {
                type: "text",
                path: "payer.firstname"
              },
              {
                type: "text",
                path: "payer.lastname"
              }
            ],
            align: true
          },
          {
            line: [
              {
                type: "text",
                label: "à"
              },
              {
                type: "text",
                path: "payee.firstname"
              },
              {
                type: "text",
                path: "payee.lastname"
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
                path: "deadlineDate"
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
            align: false
          },
          {
            line: [
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
                path: "type.value"
              }
            ],
            align: false
          },
          {
            line: [
              {
                type: "text",
                path: "method.value"
              }
            ],
            align: false
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

  constructor(public store: Store<fromStore.LocatusState>, private cdr: ChangeDetectorRef) {
    super(store);
  }

  ngOnInit() {
    this.getData = this.data
      ? this.data.data$
      : fromStore.getPaginatedSortedFiltredPayments;
    this.getPagination = this.data
      ? this.data.pagination$
      : fromStore.getPaymentsPagination;
    this.getCount = this.data ? this.data.total$ : fromStore.getPaymentsCount;
    this.getLoaded = this.data
      ? this.data.loaded$
      : fromStore.getPaymentsLoaded;
    this.init();
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  initFilters() {
    this.filters = [];
  }

  resetHeaderConfig() {
    this.headerConfig = [
      {
        title: "Ajouter",
        type: "link",
        icon: "fa fa-plus",
        clickAction: "create",
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

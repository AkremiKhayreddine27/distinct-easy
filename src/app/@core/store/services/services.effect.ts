import { Injectable } from "@angular/core";
import { Effect, Actions } from "@ngrx/effects";

import * as servicesActions from "./services.action";
import { switchMap, map, catchError } from "rxjs/operators";
import { ServicesService } from "../../data/services/services.service";
import { PaymentsService } from "../../data/services/payments.service";
import { Service, Payment } from "../../data/models";

import { of } from "rxjs/observable/of";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ServicesEffects {
  constructor(
    private actions$: Actions,
    private servicesService: ServicesService,
    private paymentService: PaymentsService
  ) {}

  @Effect()
  loadservices$ = this.actions$.ofType(servicesActions.LOAD_SERVICES).pipe(
    switchMap(() => {
      return of(this.servicesService.all()).pipe(
        map(services => new servicesActions.LoadServicesSuccess(services)),
        catchError(error => of(new servicesActions.LoadServicesFail(error)))
      );
    })
  );

  @Effect()
  selectService$ = this.actions$.ofType(servicesActions.SELECT_SERVICE).pipe(
    switchMap((action: servicesActions.SelectService) => {
      return of(this.servicesService.find(action.payload)).pipe(
        map(service => new servicesActions.LoadSelectedServiceSuccess(service)),
        catchError(error =>
          of(new servicesActions.LoadSelectedServiceFail(error))
        )
      );
    })
  );

  @Effect()
  selectServiceType$ = this.actions$
    .ofType(servicesActions.SELECT_SERVICE_TYPE)
    .pipe(
      map(
        (action: servicesActions.SelectServiceType) =>
          new servicesActions.LoadSelectedServiceTypeSuccess(action.payload)
      ),
      catchError(error =>
        of(new servicesActions.LoadSelectedServiceTypeFail(error))
      )
    );

  @Effect()
  selectServiceCategory$ = this.actions$
    .ofType(servicesActions.SELECT_SERVICE_CATEGORY)
    .pipe(
      map(
        (action: servicesActions.SelectServiceCategory) =>
          new servicesActions.LoadSelectedServiceCategorySuccess(action.payload)
      ),
      catchError(error =>
        of(new servicesActions.LoadSelectedServiceCategoryFail(error))
      )
    );

  @Effect()
  createService$ = this.actions$.ofType(servicesActions.CREATE_SERVICE).pipe(
    switchMap((action: servicesActions.CreateService) => {
      return of(this.servicesService.store(action.payload)).pipe(
        map(() => new servicesActions.CreateServiceSuccess(action.payload)),
        catchError(error => of(new servicesActions.CreateServiceFail(error)))
      );
    })
  );

  @Effect()
  updateSERVICE$ = this.actions$.ofType(servicesActions.UPDATE_SERVICE).pipe(
    switchMap((action: servicesActions.UpdateService) => {
      return of(this.servicesService.update(action.id, action.changes)).pipe(
        map(
          () =>
            new servicesActions.UpdateServiceSuccess(action.id, action.changes)
        ),
        catchError(error => of(new servicesActions.UpdateServiceFail(error)))
      );
    })
  );

  @Effect()
  deleteService$ = this.actions$.ofType(servicesActions.DELETE_SERVICE).pipe(
    switchMap((action: servicesActions.DeleteService) => {
      return of(this.servicesService.delete(action.id)).pipe(
        map(() => new servicesActions.DeleteServiceSuccess(action.id)),
        catchError(error => of(new servicesActions.DeleteServiceFail(error)))
      );
    })
  );
}

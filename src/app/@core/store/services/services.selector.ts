import { createSelector, MemoizedSelector } from "@ngrx/store";
import * as fromFeature from "../app.reducer";
import * as fromServices from "./services.reducer";
import { Service } from "../../data/models";
import { Pagination, FilterConf, sort, filter, paginate } from "../helpers";
import { Dictionary } from "@ngrx/entity";

export const getServicesState = createSelector(
  fromFeature.getLocatusState,
  (state: fromFeature.LocatusState) => state.services
);

export const getServicesEntities = createSelector(
  getServicesState,
  fromServices.getServicesEntities
);

export const getServicesCount = createSelector(getServicesState, state => {
  return filter(
    state.filters,
    Object.keys(state.entities).map(id => state.entities[id])
  ).length;
});

export const getPaginatedSortedFiltredServices = createSelector(
  getServicesState,
  state => {
    return paginate(
      state.pagination,
      sort(
        state.sort,
        filter(
          state.filters,
          Object.keys(state.entities).map(id => state.entities[id])
        )
      )
    );
  }
);

export const getAllServices = createSelector(getServicesState, state => {
  return Object.keys(state.entities).map(id => state.entities[id]);
});

export const getSelectedService = createSelector(
  getServicesState,
  fromServices.getSelectedService
);

export const getSelectedServiceType = createSelector(
  getServicesState,
  fromServices.getSelectedServiceType
);

export const getSelectedServiceCategory = createSelector(
  getServicesState,
  fromServices.getSelectedServiceCategory
);

export const getServicesLoaded = createSelector(
  getServicesState,
  fromServices.getServicesLoaded
);

export const getServicesLoading = createSelector(
  getServicesState,
  fromServices.getServicesLoading
);

export const getServicesFilters = createSelector(
  getServicesState,
  fromServices.getServicesFilters
);

export const getServicesPagination = createSelector(
  getServicesState,
  fromServices.getServicesPagination
);

export const getServicesError = createSelector(
  getServicesState,
  fromServices.getServicesError
);

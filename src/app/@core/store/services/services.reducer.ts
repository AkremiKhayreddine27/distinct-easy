import { Service } from "../../data/models";
import * as fromServicesActions from "./services.action";
import { Pagination, FilterConf, SortConf } from "../helpers";
import {
  EntityState,
  EntityAdapter,
  Dictionary,
  createEntityAdapter
} from "@ngrx/entity";

export interface ServicesState extends EntityState<Service> {
  selectedService: Service;
  selectedCategory: any;
  selectedType: any;
  loaded: boolean;
  loading: boolean;
  pagination: Pagination;
  filters: FilterConf;
  sort: SortConf[];
  error: any;
}

export const adapter: EntityAdapter<Service> = createEntityAdapter<Service>({
  sortComparer: (a, b) => {
    return a["createdAt"] - b["createdAt"];
  }
});

export const initialState: ServicesState = adapter.getInitialState({
  selectedService: null,
  selectedCategory: null,
  selectedType: null,
  loaded: false,
  loading: false,
  pagination: { page: 1, perPage: 10 },
  filters: { filters: [], andOperator: false },
  sort: [],
  error: {}
});

export function servicesReducer(
  state: ServicesState = initialState,
  action: fromServicesActions.ServicesAction
): ServicesState {
  switch (action.type) {
    case fromServicesActions.LOAD_SERVICES: {
      return {
        ...state,
        loaded: false,
        loading: true,
        filters: action.filters,
        pagination: action.pagination,
        sort: action.sort
      };
    }
    case fromServicesActions.LOAD_SERVICES_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false,
        error: action.payload
      };
    }
    case fromServicesActions.LOAD_SERVICES_SUCCESS: {
      return adapter.addAll(action.payload, {
        ...state,
        loaded: true,
        loading: false,
        error: null
      });
    }
    case fromServicesActions.SELECT_SERVICE: {
      return {
        ...state
      };
    }
    case fromServicesActions.LOAD_SELECTED_SERVICE: {
      return {
        ...state
      };
    }
    case fromServicesActions.LOAD_SELECTED_SERVICE_FAIL: {
      return {
        ...state,
        error: action.payload
      };
    }
    case fromServicesActions.LOAD_SELECTED_SERVICE_SUCCESS: {
      return {
        ...state,
        selectedService: action.payload,
        error: null
      };
    }
    case fromServicesActions.SELECT_SERVICE_TYPE: {
      return {
        ...state
      };
    }
    case fromServicesActions.LOAD_SELECTED_SERVICE_TYPE: {
      return {
        ...state
      };
    }
    case fromServicesActions.LOAD_SELECTED_SERVICE_TYPE_FAIL: {
      return {
        ...state,
        error: action.payload
      };
    }
    case fromServicesActions.LOAD_SELECTED_SERVICE_TYPE_SUCCESS: {
      return {
        ...state,
        selectedType: action.payload,
        error: null
      };
    }
    case fromServicesActions.SELECT_SERVICE_CATEGORY: {
      return {
        ...state
      };
    }
    case fromServicesActions.LOAD_SELECTED_SERVICE_CATEGORY: {
      return {
        ...state
      };
    }
    case fromServicesActions.LOAD_SELECTED_SERVICE_CATEGORY_FAIL: {
      return {
        ...state,
        error: action.payload
      };
    }
    case fromServicesActions.LOAD_SELECTED_SERVICE_CATEGORY_SUCCESS: {
      return {
        ...state,
        selectedCategory: action.payload,
        error: null
      };
    }
    case fromServicesActions.CREATE_SERVICE: {
      return {
        ...state
      };
    }
    case fromServicesActions.CREATE_SERVICE_SUCCESS: {
      return adapter.addOne(action.payload, { ...state });
    }
    case fromServicesActions.CREATE_SERVICE_FAIL: {
      return {
        ...state,
        error: action.payload
      };
    }
    case fromServicesActions.UPDATE_SERVICE: {
      return {
        ...state
      };
    }
    case fromServicesActions.UPDATE_SERVICE_SUCCESS: {
      return adapter.updateOne(
        {
          id: action.id,
          changes: action.changes
        },
        { ...state }
      );
    }
    case fromServicesActions.UPDATE_SERVICE_FAIL: {
      return {
        ...state,
        error: action.payload
      };
    }
    case fromServicesActions.DELETE_SERVICE: {
      return {
        ...state
      };
    }
    case fromServicesActions.DELETE_SERVICE_SUCCESS: {
      return adapter.removeOne(action.id, { ...state });
    }
    case fromServicesActions.DELETE_SERVICE_FAIL: {
      return {
        ...state,
        error: action.payload
      };
    }
  }
  return state;
}

export const getServicesEntities = (state: ServicesState) => {
  return state.entities;
};
export const getSelectedService = (state: ServicesState) => {
  return state.selectedService;
};
export const getSelectedServiceType = (state: ServicesState) => {
  return state.selectedType;
};
export const getSelectedServiceCategory = (state: ServicesState) => {
  return state.selectedCategory;
};
export const getServicesLoading = (state: ServicesState) => {
  return state.loading;
};
export const getServicesLoaded = (state: ServicesState) => {
  return state.loaded;
};
export const getServicesPagination = (state: ServicesState) => {
  return state.pagination;
};
export const getServicesFilters = (state: ServicesState) => {
  return state.filters;
};
export const getServicesError = (state: ServicesState) => {
  return state.error;
};

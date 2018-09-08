
import { User } from '../../data/models';
import * as fromContactsActions from './contacts.action';
import { Pagination, FilterConf, SortConf } from '../helpers';
import { EntityState, EntityAdapter, Dictionary, createEntityAdapter } from '@ngrx/entity';

export interface ContactsState extends EntityState<User> {
    selectedContact: User,
    loaded: boolean,
    loading: boolean,
    pagination: Pagination,
    filters: FilterConf,
    sort: SortConf[],
    error: any,
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>({
    sortComparer: (a, b) => {
        return a['createdAt'] - b['createdAt'];
    }
});

export const initialState: ContactsState = adapter.getInitialState({
    selectedContact: null,
    loaded: false,
    loading: false,
    pagination: { page: 1, perPage: 10 },
    filters: { filters: [], andOperator: false },
    sort: [],
    error: {},
})

export function contactsReducer(
    state: ContactsState = initialState,
    action: fromContactsActions.ContactsAction): ContactsState {
    switch (action.type) {
        case fromContactsActions.LOAD_CONTACTS: {
            return {
                ...state,
                loaded: false,
                loading: true,
                filters: action.filters,
                pagination: action.pagination,
                sort: action.sort,
            }
        }
        case fromContactsActions.LOAD_CONTACTS_FAIL: {
            return {
                ...state,
                loaded: false,
                loading: false,
                error: action.payload,
            }
        }
        case fromContactsActions.LOAD_CONTACTS_SUCCESS: {
            return adapter.addAll(action.payload, {
                ...state,
                loaded: true,
                loading: false,
                error: null,
            });
        }
        case fromContactsActions.SELECT_CONTACT: {
            return {
                ...state,
            }
        }
        case fromContactsActions.LOAD_SELECTED_CONTACT: {
            return {
                ...state,
            }
        }
        case fromContactsActions.LOAD_SELECTED_CONTACT_FAIL: {
            return {
                ...state,
                error: action.payload,
            }
        }
        case fromContactsActions.LOAD_SELECTED_CONTACT_SUCCESS: {
            return {
                ...state,
                selectedContact: action.payload,
                error: null,
            }
        }
    }
    return state;
}

export const getContactsEntities = (state: ContactsState) => { return state.entities }
export const getSelectedContact = (state: ContactsState) => { return state.selectedContact }
export const getContactsLoading = (state: ContactsState) => { return state.loading }
export const getContactsLoaded = (state: ContactsState) => { return state.loaded }
export const getContactsPagination = (state: ContactsState) => { return state.pagination }
export const getContactsFilters = (state: ContactsState) => { return state.filters }
export const getContactsError = (state: ContactsState) => { return state.error }

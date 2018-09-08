
import { Document } from '../../data/models';
import * as fromDocumentsActions from './documents.action';
import { Pagination, FilterConf, SortConf } from '../helpers';
import { EntityState, EntityAdapter, Dictionary, createEntityAdapter } from '@ngrx/entity';
import { SELECT_DOCUMENT, LOAD_SELECTED_DOCUMENT, LOAD_SELECTED_DOCUMENT_FAIL } from './documents.action';

export interface DocumentsState extends EntityState<Document> {
    selectedDocument: Document,
    loaded: boolean,
    loading: boolean,
    pagination: Pagination,
    filters: FilterConf,
    sort: SortConf[],
    error: any,
}

export const adapter: EntityAdapter<Document> = createEntityAdapter<Document>({
    sortComparer: (a, b) => {
        return a['createdAt'] - b['createdAt'];
    }
});

export const initialState: DocumentsState = adapter.getInitialState({
    selectedDocument: null,
    loaded: false,
    loading: false,
    pagination: { page: 1, perPage: 10 },
    filters: { filters: [], andOperator: false },
    sort: [],
    error: {},
})

export function documentsReducer(
    state: DocumentsState = initialState,
    action: fromDocumentsActions.DocumentsAction): DocumentsState {
    switch (action.type) {
        case fromDocumentsActions.LOAD_DOCUMENTS: {
            return {
                ...state,
                loaded: false,
                loading: true,
                filters: action.filters,
                pagination: action.pagination,
                sort: action.sort,
            }
        }
        case fromDocumentsActions.LOAD_DOCUMENTS_FAIL: {
            return {
                ...state,
                loaded: false,
                loading: false,
                error: action.payload,
            }
        }
        case fromDocumentsActions.LOAD_DOCUMENTS_SUCCESS: {
            return adapter.addAll(action.payload, {
                ...state,
                loaded: true,
                loading: false,
                error: null,
            });
        }
        case fromDocumentsActions.SELECT_DOCUMENT: {
            return {
                ...state,
            }
        }
        case fromDocumentsActions.LOAD_SELECTED_DOCUMENT: {
            return {
                ...state,
            }
        }
        case fromDocumentsActions.LOAD_SELECTED_DOCUMENT_FAIL: {
            return {
                ...state,
                error: action.payload,
            }
        }
        case fromDocumentsActions.LOAD_SELECTED_DOCUMENT_SUCCESS: {
            return {
                ...state,
                selectedDocument: action.payload,
                error: null,
            }
        }
    }
    return state;
}

export const getDocumentsEntities = (state: DocumentsState) => { return state.entities }
export const getSelectedDocument = (state: DocumentsState) => { return state.selectedDocument }
export const getDocumentsLoading = (state: DocumentsState) => { return state.loading }
export const getDocumentsLoaded = (state: DocumentsState) => { return state.loaded }
export const getDocumentsPagination = (state: DocumentsState) => { return state.pagination }
export const getDocumentsFilters = (state: DocumentsState) => { return state.filters }
export const getDocumentsError = (state: DocumentsState) => { return state.error }

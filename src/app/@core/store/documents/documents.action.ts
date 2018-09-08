import { Action } from '@ngrx/store';

import { Document } from '../../data/models';
import { Pagination, FilterConf, SortConf } from '../helpers';

export const LOAD_DOCUMENTS = '[Documents] Load Documents';
export const LOAD_DOCUMENTS_FAIL = '[Documents] Load Documents Fail';
export const LOAD_DOCUMENTS_SUCCESS = '[Documents] Load Documents Success';
export const SELECT_DOCUMENT = '[Documents] Select Documents';
export const LOAD_SELECTED_DOCUMENT = '[Documents] Load Selected Documents';
export const LOAD_SELECTED_DOCUMENT_FAIL = '[Documents] Load Selected Documents Fail';
export const LOAD_SELECTED_DOCUMENT_SUCCESS = '[Documents] Load Selected Documents Success';

export class LoadDocuments implements Action {
    readonly type = LOAD_DOCUMENTS;
    constructor(public filters: FilterConf = null, public sort: SortConf[] = null, public pagination: Pagination = null) { }

}

export class LoadDocumentsFail implements Action {
    readonly type = LOAD_DOCUMENTS_FAIL;
    constructor(public payload: any) { }
}

export class LoadDocumentsSuccess implements Action {
    readonly type = LOAD_DOCUMENTS_SUCCESS;
    constructor(public payload: Document[]) { }
}

export class SelectDocument implements Action {
    readonly type = SELECT_DOCUMENT;
    constructor(public payload: number) { }
}

export class LoadSelectedDocument implements Action {
    readonly type = LOAD_SELECTED_DOCUMENT;
}

export class LoadSelectedDocumentFail implements Action {
    readonly type = LOAD_SELECTED_DOCUMENT_FAIL;
    constructor(public payload: any) { }
}

export class LoadSelectedDocumentSuccess implements Action {
    readonly type = LOAD_SELECTED_DOCUMENT_SUCCESS;
    constructor(public payload: Document) { }
}

export type DocumentsAction =
    LoadDocuments |
    LoadDocumentsFail |
    LoadDocumentsSuccess |
    SelectDocument |
    LoadSelectedDocument |
    LoadSelectedDocumentFail |
    LoadSelectedDocumentSuccess;
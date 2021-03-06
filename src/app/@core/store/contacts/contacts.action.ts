import { Action } from '@ngrx/store';

import { User } from '../../data/models';
import { Pagination, FilterConf, SortConf } from '../helpers';

export const LOAD_CONTACTS = '[Contacts] Load Contacts';
export const LOAD_CONTACTS_FAIL = '[Contacts] Load Contacts Fail';
export const LOAD_CONTACTS_SUCCESS = '[Contacts] Load Contacts Success';
export const SELECT_CONTACT = '[Contacts] Select Contact';
export const LOAD_SELECTED_CONTACT = '[Contacts] Load Selected Contact';
export const LOAD_SELECTED_CONTACT_FAIL = '[Contacts] Load Selected Contact Fail';
export const LOAD_SELECTED_CONTACT_SUCCESS = '[Contacts] Load Selected Contact Success';

export class LoadContacts implements Action {
    readonly type = LOAD_CONTACTS;
    constructor(public filters: FilterConf = null, public sort: SortConf[] = null, public pagination: Pagination = null) { }

}

export class LoadContactsFail implements Action {
    readonly type = LOAD_CONTACTS_FAIL;
    constructor(public payload: any) { }
}

export class LoadContactsSuccess implements Action {
    readonly type = LOAD_CONTACTS_SUCCESS;
    constructor(public payload: User[]) { }
}

export class SelectContact implements Action {
    readonly type = SELECT_CONTACT;
    constructor(public payload: number) { }
}

export class LoadSelectedContact implements Action {
    readonly type = LOAD_SELECTED_CONTACT;
}

export class LoadSelectedContactFail implements Action {
    readonly type = LOAD_SELECTED_CONTACT_FAIL;
    constructor(public payload: any) { }
}

export class LoadSelectedContactSuccess implements Action {
    readonly type = LOAD_SELECTED_CONTACT_SUCCESS;
    constructor(public payload: User) { }
}

export type ContactsAction =
    LoadContacts |
    LoadContactsFail |
    LoadContactsSuccess |
    SelectContact |
    LoadSelectedContact |
    LoadSelectedContactFail |
    LoadSelectedContactSuccess;
import { Action } from '@ngrx/store';

import { Property } from '../../data/models';
import { Pagination, FilterConf, SortConf } from '../helpers';

export const GENERATE_PROPERTIES_DATA = '[Properties] Generate Properties data';
export const GENERATE_PROPERTIES_DATA_SUCCESS = '[Properties] Generate Properties data Success';
export const GENERATE_PROPERTIES_DATA_FAIL = '[Properties] Generate Properties data Fail';
export const LOAD_PROPERTIES = '[Properties] Load Properties';
export const LOAD_PROPERTIES_FAIL = '[Properties] Load Properties Fail';
export const LOAD_PROPERTIES_SUCCESS = '[Properties] Load Properties Success';
export const SELECT_PROPERTY = '[Properties] Select Property';
export const LOAD_SELECTED_PROPERTY = '[Properties] Load Selected Property';
export const LOAD_SELECTED_PROPERTY_FAIL = '[Properties] Load Selected Property Fail';
export const LOAD_SELECTED_PROPERTY_SUCCESS = '[Properties] Load Selected Property Success';

export class GeneratePropertiesData implements Action {
    readonly type = GENERATE_PROPERTIES_DATA;
}

export class GeneratePropertiesDataSuccess implements Action {
    readonly type = GENERATE_PROPERTIES_DATA_SUCCESS;
}

export class GeneratePropertiesDataFail implements Action {
    readonly type = GENERATE_PROPERTIES_DATA_FAIL;
}

export class LoadProperties implements Action {
    readonly type = LOAD_PROPERTIES;
    constructor(public filters: FilterConf = null, public sort: SortConf[] = null, public pagination: Pagination = null) { }

}

export class LoadPropertiesFail implements Action {
    readonly type = LOAD_PROPERTIES_FAIL;
    constructor(public payload: any) { }
}

export class LoadPropertiesSuccess implements Action {
    readonly type = LOAD_PROPERTIES_SUCCESS;
    constructor(public payload: Property[]) { }
}

export class SelectProperty implements Action {
    readonly type = SELECT_PROPERTY;
    constructor(public payload: number) { }
}

export class LoadSelectedProperty implements Action {
    readonly type = LOAD_SELECTED_PROPERTY;
}

export class LoadSelectedPropertyFail implements Action {
    readonly type = LOAD_SELECTED_PROPERTY_FAIL;
    constructor(public payload: any) { }
}

export class LoadSelectedPropertySuccess implements Action {
    readonly type = LOAD_SELECTED_PROPERTY_SUCCESS;
    constructor(public payload: Property) { }
}

export type PropertiesAction =
    GeneratePropertiesData |
    GeneratePropertiesDataSuccess |
    GeneratePropertiesDataFail |
    LoadProperties |
    LoadPropertiesFail |
    LoadPropertiesSuccess |
    SelectProperty |
    LoadSelectedProperty |
    LoadSelectedPropertyFail |
    LoadSelectedPropertySuccess;
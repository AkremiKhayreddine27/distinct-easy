import { ActionReducerMap, createFeatureSelector, MemoizedSelector } from '@ngrx/store';
import * as fromProperties from './properties/properties.reducer';
import * as fromReservations from './reservations/reservations.reducer';
import * as fromPayments from './payments/payments.reducer';
import * as fromContacts from './contacts/contacts.reducer';
import * as fromDocuments from './documents/documents.reducer';

export interface LocatusState {
    properties: fromProperties.PropertiesState;
    reservations: fromReservations.ReservationsState,
    payments: fromPayments.PaymentsState,
    contacts: fromContacts.ContactsState,
    documents: fromDocuments.DocumentsState,
}

export const reducers: ActionReducerMap<LocatusState> = {
    properties: fromProperties.propertiesReducer,
    reservations: fromReservations.reservationsReducer,
    payments: fromPayments.paymentsReducer,
    contacts: fromContacts.contactsReducer,
    documents: fromDocuments.documentsReducer,
}

export const getLocatusState = createFeatureSelector<LocatusState>('locatus');
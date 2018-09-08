import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import * as contactsActions from './contacts.action';
import { switchMap, map, catchError } from 'rxjs/operators';
import { ContactsService } from '../../data/services/contacts.service';

import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ContactsEffects {
    constructor(private actions$: Actions, private contactsService: ContactsService) { }


    @Effect()
    loadContacts$ = this.actions$.ofType(contactsActions.LOAD_CONTACTS)
        .pipe(
            switchMap(() => {
                return of(this.contactsService.all()).pipe(
                    map(contacts => new contactsActions.LoadContactsSuccess(contacts)),
                    catchError(error => of(new contactsActions.LoadContactsFail(error)))
                )
            })
        );
}
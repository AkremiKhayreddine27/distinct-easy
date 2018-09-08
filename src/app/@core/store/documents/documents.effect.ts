import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import * as documentsActions from './documents.action';
import { switchMap, map, catchError } from 'rxjs/operators';
import { DocumentsService } from '../../data/services/documents.service';

import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DocumentsEffects {
    constructor(private actions$: Actions, private documentsService: DocumentsService) { }


    @Effect()
    loadDocuments$ = this.actions$.ofType(documentsActions.LOAD_DOCUMENTS)
        .pipe(
            switchMap(() => {
                return of(this.documentsService.all()).pipe(
                    map(documents => new documentsActions.LoadDocumentsSuccess(documents)),
                    catchError(error => of(new documentsActions.LoadDocumentsFail(error)))
                )
            })
        );
}
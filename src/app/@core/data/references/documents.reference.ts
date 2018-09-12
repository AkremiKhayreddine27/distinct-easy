import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { delay } from "rxjs/operators";

export const types: any[] = [
    {
        id: 1,
        value: 'facture',
    },
    {
        id: 2,
        value: 'contrat',
    },
    {
        id: 3,
        value: 'paiement',
    },
    {
        id: 4,
        value: 'autre',
    },
];

export const categoryTypes: any[] = [
    {
        id: 1,
        value: 'Bien',
        cssClass: 'nb-badge nb-badge-success',
    },
    {
        id: 2,
        value: 'Réservation',
        cssClass: 'nb-badge ng-badge-danger',
    },
    {
        id: 3,
        value: 'Service',
        cssClass: 'nb-badge nb-badge-info',
    },
];

export function getTypes(): Observable<any[]> {
    return of(this.types).pipe(delay(500));
}

export function getCategoryTypes(): Observable<any[]> {
    return of(this.categoryTypes).pipe(delay(500));
}

export function getCategoryType(id: number) {
    return categoryTypes.find(type => {
        return type.id === id;
    });
}

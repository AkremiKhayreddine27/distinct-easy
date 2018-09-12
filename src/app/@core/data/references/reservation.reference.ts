import { of } from "rxjs";
import { delay } from "rxjs/operators";

export const statuses: any[] = [
    { id: 1, value: 'validée', cssClass: 'nb-badge nb-badge-success' },
    { id: 2, value: 'provisoire', cssClass: 'nb-badge nb-badge-warning' },
    { id: 3, value: 'annulée', cssClass: 'nb-badge nb-badge-danger' },
    { id: 4, value: 'terminée', cssClass: 'nb-badge nb-badge-info' }
];

export const platforms: any[] = [
    { id: 1, value: 'Airbnb' },
    { id: 2, value: 'Abritel' },
    { id: 3, value: 'Autre' },
    { id: 4, value: 'EasyLocatus' }
];

export function getStatuses() {
    return of(statuses).pipe(delay(500));
}

export function getPlatforms() {
    return of(platforms).pipe(delay(500));
}

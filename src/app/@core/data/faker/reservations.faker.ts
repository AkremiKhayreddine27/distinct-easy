
import { Injectable } from '@angular/core';

import * as dateFns from 'date-fns';
import * as faker from 'faker';

import { User } from '../models/user';
import { Property } from '../models/property';
import { Reservation } from '../models/reservation';
import { SelectItem } from '../models/selectItem';
import { Payment } from '../models/payment';

import { ContactsFaker } from './contacts.faker';
import * as reservationReferences from '../references/reservation.reference';


@Injectable()
export class ReservationsFaker {

    constructor(private contactsFaker: ContactsFaker) {

    }

    generate(
        nbr: number,
        tariff: any,
        property: Property,
    ): Reservation[] {
        let reservations: Reservation[] = [];
        let deadline = dateFns.addDays(new Date(), 35);
        let start = dateFns.addDays(new Date(), 28);
        let end = dateFns.addDays(start, 14);
        for (let n = 0; n < nbr; n++) {
            const id = faker.random.number();
            deadline = dateFns.subDays(deadline, 14);
            start = dateFns.subDays(start, 14);
            end = dateFns.subDays(end, 14);
            let status: SelectItem = faker.random.arrayElement(reservationReferences.statuses.filter(s => { return s.value !== 'terminée' }));
            if (dateFns.isBefore(start, new Date()) && dateFns.isBefore(end, new Date())) {
                status = reservationReferences.statuses.find(s => {
                    return s.value === 'terminée';
                });
            }
            const amount = dateFns.differenceInDays(end, start) * tariff;
            let balance = 0;
            let adjusted = 0;
            let reservation: Reservation = {
                id: id,
                kind: 'Réservation',
                title: faker.lorem.sentence(),
                description: faker.lorem.paragraph(),
                status: { id: status.id, value: status.value, cssClass: status.cssClass },
                start: start,
                end: end,
                reservationDate: new Date(),
                deadlineDate: deadline,
                createdAt: new Date(),
                updatedAt: new Date(),
                price: {
                    value: amount,
                    currency: {
                        symbol: '€',
                        code: 'EUR'
                    }
                },
                adjusted: {
                    value: adjusted,
                    currency: {
                        symbol: '€',
                        code: 'EUR'
                    }
                },
                balance: {
                    value: balance,
                    currency: {
                        symbol: '€',
                        code: 'EUR'
                    }
                },
                deposit: 20,
                bail: {
                    value:  /* tariffsService.findFirstBy('property.id', property.id).bail */ 100,
                    currency: {
                        symbol: '€',
                        code: 'EUR'
                    }
                },
                nbrAdultes: faker.random.number(10),
                nbrChildren: faker.random.number(10),
                nbrPets: faker.random.number(10),
                property: { ...property },
                platform: faker.random.arrayElement(reservationReferences.platforms)
            };
            //documentsService.generateDocuments(1, 2, reservation, '/pages/reservations/' + reservation.id + '/edit');
            reservation.nbrNight = dateFns.differenceInDays(reservation.end, reservation.start);
            reservations.push(reservation);
        }
        return reservations;
    }

    calculateBalance(payments: Payment[]): number {
        let balance = 0;
        payments.map(payment => {
            if (payment.type.isOutgo) {
                balance = balance - payment.price.value;
            } else {
                balance = balance + payment.price.value;
            }
        });
        return balance;
    }

    calculateAdjusted(payments: Payment[]): number {
        let balance = 0;
        payments.map(payment => {
            if (payment.type.isOutgo && payment.status.id === 1) {
                balance = balance - payment.price.value;
            } else if (payment.type.isIncome && payment.status.id === 1) {
                balance = balance + payment.price.value;
            }
        });
        return balance;
    }
}
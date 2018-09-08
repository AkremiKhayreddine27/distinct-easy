import { Injectable } from "@angular/core";
import { DataService } from './data.abstract';
import { Reservation, Payment } from "../models";
import * as paymentReferences from '../references/payment.reference';
import * as faker from 'faker';
import * as dateFns from 'date-fns';

@Injectable()
export class PaymentsService extends DataService {

    constructor() {
        super();
    }

    getType(id: number): any {
        return paymentReferences.types.find(type => {
            return type.id === id;
        });
    }

    generate(args, push = true) {
        const payment: Payment = {
            id: faker.random.number(),
            description: faker.lorem.paragraph(),
            price: {
                value: args.price,
                currency: {
                    symbol: '€',
                    code: 'EUR'
                }
            },
            tva: faker.random.number(20),
            status: args.status,
            method: faker.random.arrayElement(paymentReferences.methods),
            type: args.type,
            paymentDate: args.status.id === 1 ? dateFns.isAfter(args.nomenclature.start, new Date()) ? new Date() : args.nomenclature.start : null,
            deadlineDate: args.deadlineDate ? args.deadlineDate : args.nomenclature.start,
            payer: args.type.isOutgo ? args.nomenclature.property.owner : args.nomenclature.lodger ? args.nomenclature.lodger : args.nomenclature.provider,
            payee: args.type.isIncome ? args.nomenclature.property.owner : args.nomenclature.lodger ? args.nomenclature.lodger : args.nomenclature.provider,
            nomenclature: { type: args.nomenclatureType, id: args.nomenclature.id },
            propertyId: args.nomenclature.property.id
        };
        return payment;
    }

    createSojournPayments(reservation: Reservation, forNew: boolean = false): Payment[] {
        const payments: Payment[] = [];
        let price = (reservation.price.value * reservation.deposit) / 100;
        const status = forNew ? paymentReferences.statuses[1] : paymentReferences.statuses[0];
        if (reservation.deposit > 0) {
            payments.push(this.createDepositPayment(price, reservation, status));
        }
        price = reservation.price.value - price;
        payments.push(this.createSoldePayment(price, reservation, status));
        if (reservation.bail.value > 0) {
            payments.push(this.createBailPayment(reservation.bail.value, reservation, status));
            payments.push(this.createRefundPayment(reservation.bail.value, reservation, status));
        }
        return payments;
    }

    createSoldePayment(price: number, reservation: Reservation, status: any) {
        return this.generate({ type: this.getType(2), nomenclatureType: 'Réservation', status: status, nomenclature: reservation, price: price });
    }

    createDepositPayment(price: number, reservation: Reservation, status: any, push = true) {
        return this.generate({ type: this.getType(1), nomenclatureType: 'Réservation', status: status, nomenclature: reservation, price: price }, push);
    }

    createBailPayment(price: number, reservation: Reservation, status: any, push = true) {
        return this.generate({ type: this.getType(3), nomenclatureType: 'Réservation', status: status, nomenclature: reservation, price: price }, push);
    }

    createRefundPayment(price: number, reservation: Reservation, status: any, push = true) {
        return this.generate({ type: this.getType(9), nomenclatureType: 'Réservation', status: status, nomenclature: reservation, price: price }, push);
    }
}
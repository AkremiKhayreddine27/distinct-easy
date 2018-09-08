import { Injectable } from "@angular/core";
import * as faker from 'faker';
import { Payment } from '../models';
import * as paymentReferences from '../references/payment.reference';
import * as dateFns from 'date-fns';

@Injectable()
export class Paymentsfaker {

    generate(args) {
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
}
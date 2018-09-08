import { Injectable } from "@angular/core";
import { DataService } from "./data.abstract";
import { SelectItem } from "../models/selectItem";
import { Payment } from "../models/payment";

@Injectable()
export class ReservationsService extends DataService {

    constructor() {
        super();
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
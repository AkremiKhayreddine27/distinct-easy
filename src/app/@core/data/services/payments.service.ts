import { Injectable } from "@angular/core";
import { DataService } from "./data.abstract";
import { Reservation, Payment, Service } from "../models";
import * as paymentReferences from "../references/payment.reference";
import * as faker from "faker";
import * as dateFns from "date-fns";

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
          symbol: "€",
          code: "EUR"
        }
      },
      tva: faker.random.number(20),
      status: args.status,
      method: faker.random.arrayElement(paymentReferences.methods),
      type: args.type,
      paymentDate:
        args.status.id === 1
          ? dateFns.isAfter(args.nomenclature.start, new Date())
            ? new Date()
            : args.nomenclature.start
          : null,
      deadlineDate: args.deadlineDate
        ? args.deadlineDate
        : args.nomenclature.start,
      payer: args.type.isOutgo
        ? args.nomenclature.property.owner
        : args.nomenclature.lodger
          ? args.nomenclature.lodger
          : args.nomenclature.provider,
      payee: args.type.isIncome
        ? args.nomenclature.property.owner
        : args.nomenclature.lodger
          ? args.nomenclature.lodger
          : args.nomenclature.provider,
      nomenclature: { type: args.nomenclatureType, id: args.nomenclature.id },
      propertyId: args.nomenclature.property.id
    };
    return payment;
  }

  createSojournPayments(
    reservation: Reservation,
    forNew: boolean = false
  ): Payment[] {
    const payments: Payment[] = [];
    let price = (reservation.price.value * reservation.deposit) / 100;
    const status = forNew
      ? paymentReferences.statuses[1]
      : paymentReferences.statuses[0];
    if (reservation.deposit > 0) {
      payments.push(this.createDepositPayment(price, reservation, status));
    }
    price = reservation.price.value - price;
    payments.push(this.createSoldePayment(price, reservation, status));
    if (reservation.bail.value > 0) {
      payments.push(
        this.createBailPayment(reservation.bail.value, reservation, status)
      );
      payments.push(
        this.createRefundPayment(reservation.bail.value, reservation, status)
      );
    }
    return payments;
  }

  createSoldePayment(price: number, reservation: Reservation, status: any) {
    return this.generate({
      type: this.getType(2),
      nomenclatureType: "Réservation",
      status: status,
      nomenclature: reservation,
      price: price
    });
  }

  createDepositPayment(
    price: number,
    reservation: Reservation,
    status: any,
    push = true
  ) {
    return this.generate(
      {
        type: this.getType(1),
        nomenclatureType: "Réservation",
        status: status,
        nomenclature: reservation,
        price: price
      },
      push
    );
  }

  createBailPayment(
    price: number,
    reservation: Reservation,
    status: any,
    push = true
  ) {
    return this.generate(
      {
        type: this.getType(3),
        nomenclatureType: "Réservation",
        status: status,
        nomenclature: reservation,
        price: price
      },
      push
    );
  }

  createRefundPayment(
    price: number,
    reservation: Reservation,
    status: any,
    push = true
  ) {
    return this.generate(
      {
        type: this.getType(9),
        nomenclatureType: "Réservation",
        status: status,
        nomenclature: reservation,
        price: price
      },
      push
    );
  }

  createServicePayments(service: Service): Payment[] {
    let payments: Payment[];
    switch (service.frequency.id) {
      case 1:
        payments = [];
        break;
      case 2:
        payments = this.createTimetablePayments(
          service.deadline,
          service.end,
          1,
          service
        );
        break;
      case 3:
        payments = this.createTimetablePayments(
          service.deadline,
          service.end,
          2,
          service
        );
        break;
      case 4:
        payments = this.createTimetablePayments(
          service.deadline,
          service.end,
          3,
          service
        );
        break;
      case 5:
        payments = this.createTimetablePayments(
          service.deadline,
          service.end,
          6,
          service
        );
        break;
      case 6:
        payments = this.createTimetablePayments(
          service.deadline,
          service.end,
          12,
          service
        );
        break;
    }
    return payments;
  }

  createTimetablePayments(
    start: Date,
    end: Date,
    frequency: number,
    nomenclature: Service
  ): Payment[] {
    const payments: Payment[] = [];
    for (
      let date = start;
      dateFns.isBefore(date, end);
      date = dateFns.addMonths(date, frequency)
    ) {
      const payment = this.generate({
        type: this.getType(8),
        status: paymentReferences.getStatus(2),
        nomenclature: nomenclature,
        nomenclatureType: "Service",
        price: nomenclature.price.value,
        deadlineDate: date
      });
      payments.push(payment);
    }
    return payments;
  }
}

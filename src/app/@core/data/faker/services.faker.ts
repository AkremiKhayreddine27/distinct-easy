import { Injectable } from "@angular/core";
import { Service, Property } from "../models";
import * as faker from "faker";
import * as dateFns from "date-fns";
import * as serviceReference from "../references/services.reference";

@Injectable()
export class ServicesFaker {
  generate(nbr: number, property: Property) {
    let services: Service[] = [];
    for (let n = 0; n < nbr; n++) {
      const id = faker.random.number();
      let start = faker.date.recent(20);
      let end = dateFns.addMonths(start, 24);
      let category = faker.random.arrayElement(serviceReference.subCategories);
      let service: Service = {
        id: id,
        kind: "Service",
        title: faker.lorem.sentence(),
        description: faker.lorem.paragraph(),
        start: start,
        end: end,
        createdAt: faker.date.past(),
        priority: faker.random.arrayElement(serviceReference.priorities).value,
        category: category,
        type: faker.random.arrayElement(serviceReference.getTypes(category.id)),
        contractDate: new Date(),
        deadline: start,
        frequency: faker.random.arrayElement(serviceReference.frequencies),
        tva: faker.random.number(),
        status: faker.random.arrayElement(serviceReference.statuses),
        contractNumber: faker.finance.account(),
        price: {
          value: faker.random.number(1000),
          currency: {
            symbol: "€",
            code: "EUR"
          }
        },
        payments: [],
        reservation: null,
        property: property
      };
      services.push(service);
    }
    return services;
  }
}

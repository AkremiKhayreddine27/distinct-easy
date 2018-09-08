import { Injectable } from "@angular/core";
import * as userReferences from '../references/user.reference';
import * as faker from 'faker';
import { User } from '../models/user';

@Injectable()
export class ContactsFaker {

    generate(args) {
        let contact: User = {
            id: faker.random.number(),
            firstname: faker.name.firstName(),
            lastname: faker.name.lastName(),
            email: faker.internet.email(),
            roles: [userReferences.roles.find(role => {
                return role.id === args.roleId;
            })],
            phone: faker.phone.phoneNumber(),
            location: {
                country: 'France',
                city: 'Issy-les-Moulineaux',
                state: 'Ile-de-France',
                address: 'Info Municipale, Chemin de Bretagne',
                longitude: 2.2582740783036575,
                latitude: 48.82377450294101,
                postcode: '92130',
                isValid: true
            }
        };
        return contact;
    }

}
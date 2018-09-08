import { Injectable } from "@angular/core";
import { Property } from "../models/property";
import { ReservationsFaker } from './reservations.faker';
import * as faker from 'faker';
import * as propertyReferences from '../references/property.reference';
import { ContactsFaker } from './contacts.faker';

@Injectable()
export class PropertiesFaker {

    constructor() { }

    generate(nbr: number = 6) {
        let properties: Property[] = [];
        let images = [
            {
                name: 'p1.jpg',
                type: '',
                size: 0,
                url: 'assets/images/p1.jpg'
            },
            {
                name: 'p2.jpg',
                type: '',
                size: 0,
                url: 'assets/images/p2.jpg'
            },
            {
                name: 'p3.jpg',
                type: '',
                size: 0,
                url: 'assets/images/p3.jpg'
            },
            {
                name: 'p4.jpg',
                type: '',
                size: 0,
                url: 'assets/images/p4.jpg'
            },
            {
                name: 'p5.jpg',
                type: '',
                size: 0,
                url: 'assets/images/p5.jpg'
            },
            {
                name: 'p6.jpg',
                type: '',
                size: 0,
                url: 'assets/images/p6.jpg'
            },
        ];
        let titles = [
            'Studio des Palmiers Baie Nettlé',
            'Superbe duplex centre historique coeur de Bordeaux',
            'Cosy Room Paris Center the Marais',
            'MAISON SOUS LES TOITS - HAUT MARAIS',
            'Villa de Charme Sud Landes 3ch',
            'Amboise Troglodyte'
        ];
        for (let i = 1; i <= nbr; i++) {
            let property: Property = {
                id: i,
                title: titles[i - 1],
                description: faker.lorem.paragraph(),
                images: [
                    faker.random.arrayElement(images),
                    faker.random.arrayElement(images),
                    faker.random.arrayElement(images)
                ],
                status: faker.random.arrayElement(propertyReferences.statuses),
                type: faker.random.arrayElement(propertyReferences.types),
                language: faker.random.arrayElement(propertyReferences.languages),
                currency: faker.random.arrayElement(propertyReferences.currencies),
                nbrRooms: 3,
                nbrKitchens: 1,
                nbrLounges: 2,
                terrace: true,
                garden: true,
                suitableForEvents: true,
                platform: faker.random.arrayElement(propertyReferences.platforms),
                location: {
                    userLocation: {
                        country: 'France',
                        city: 'Issy-les-Moulineaux',
                        state: 'Ile-de-France',
                        address: 'Info Municipale, Chemin de Bretagne',
                        longitude: 2.2582740783036575,
                        latitude: 48.82377450294101,
                        postcode: '92130',
                        isValid: true
                    },
                    mapLocation: {
                        country: 'France',
                        city: 'Issy-les-Moulineaux',
                        state: 'Ile-de-France',
                        address: 'Info Municipale, Chemin de Bretagne',
                        longitude: 2.2582740783036575,
                        latitude: 48.82377450294101,
                        postcode: '92130',
                    },
                    isMapAddress: false
                },
                amenities: propertyReferences.amenties.filter((item: any) => {
                    return item.name.includes(faker.helpers.replaceSymbols('?').toLowerCase());
                }),
                equipements: [
                    {
                        name: 'Réfrigérateur'
                    },
                    {
                        name: 'Congélateur'
                    },
                    {
                        name: 'Four'
                    },
                    {
                        name: 'Téléphone'
                    },
                    {
                        name: 'Ordinateur'
                    },
                    {
                        name: 'Armoire'
                    },
                    {
                        name: 'Placard'
                    }
                ],
                calendars: [
                    {
                        id: 2,
                        name: 'Holidays in France',
                        color: '#039be5',
                        isLocal: false,
                        url: 'https://calendar.google.com/calendar/ical/fr.french%23holiday%40group.v.calendar.google.com/public/basic.ics',
                        display: true,
                        events: []
                    },
                    {
                        id: 1,
                        name: 'EasyLocatus',
                        url: '',
                        color: '#40DC7E',
                        isLocal: true,
                        display: true,
                        events: []
                    }
                ],
                links: [
                    {
                        titre: 'Airbnb',
                        url: 'https://www.airbnb.com/rooms/select/18575744?adults=2&s=Yys9hnmr'
                    },
                    {
                        titre: 'Abritel',
                        url: 'https://www.airbnb.com/rooms/select/18575744?adults=2&s=Yys9hnmr'
                    }
                ],
                rate: 5,
                votes: 26,
                amount: 85
            };
            properties.push(property);
        }
        return properties;
    }
}
import { Injectable } from "@angular/core";
import { PropertiesFaker } from '../faker/properties.faker';
import { DataService } from './data.abstract';
import { ReservationsFaker } from "../faker";
import { ReservationsService } from './reservations.service';
import { Property } from "../models";
import { Observable, of, throwError } from "rxjs";
import { PaymentsService } from "./payments.service";
import { ContactsFaker } from '../faker/contacts.faker';
import { ContactsService } from './contacts.service';
import { DocumentsService } from './documents.service';
import { DocumentsFaker } from "../faker/documents.faker";

@Injectable()
export class PropertiesService extends DataService {

    public selectedProperty: Property;

    constructor(
        private faker: PropertiesFaker,
        private reservationFaker: ReservationsFaker,
        private reservationService: ReservationsService,
        private paymentsService: PaymentsService,
        private contactsFaker: ContactsFaker,
        private contactsService: ContactsService,
        private documentsService: DocumentsService,
        private documentsFaker: DocumentsFaker
    ) {
        super();
    }

    init() {
        this.data = this.faker.generate(6).map(property => {
            /**
             * Generate owner
             */
            property.owner = this.contactsFaker.generate({ roleId: 1 });
            this.contactsService.store(property.owner);
            /**
             * Generate Documents
             */
            let propertyDocuments = this.documentsFaker.generate(1, 1, property, '');
            this.documentsService.storeMany(propertyDocuments);

            /**
             * Generate Reservations
             */
            this.reservationFaker.generate(15, 100, property).map(reservation => {

                /**
                 * Generate Lodger
                 */
                reservation.lodger = this.contactsFaker.generate({ roleId: 2 });

                /**
                 * Generate Payments
                 */
                let payments = this.paymentsService.createSojournPayments(reservation);
                reservation.balance.value = this.reservationService.calculateBalance(payments);
                reservation.adjusted.value = this.reservationService.calculateAdjusted(payments);

                /**
                 * Generate Documents
                 */
                let reservationDocuments = this.documentsFaker.generate(1, 2, reservation, '');

                this.contactsService.store(reservation.lodger);
                this.paymentsService.storeMany(payments);
                this.documentsService.storeMany(reservationDocuments);
                this.reservationService.store(reservation);
            });
            return property;
        });
    }

    getSelectedProperty(): Property {
        return this.selectedProperty;
    }

    setSelectedProperty(id: number): Observable<any> {
        if (this.find(id)) {
            this.selectedProperty = this.find(id);
            return of(this.selectedProperty);
        } else {
            return throwError('Property with id ' + id + ' doesnt exist');
        }
    }

}
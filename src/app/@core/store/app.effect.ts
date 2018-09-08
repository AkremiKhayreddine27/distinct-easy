import { PropertiesEffects } from './properties/properties.effect';
import { ReservationsEffects } from './reservations/reservations.effect';
import { ContactsEffects } from './contacts/contacts.effect';
import { PaymentsEffects } from './payments/payments.effect';
import { DocumentsEffects } from './documents/documents.effect';
export const effects: any[] = [PropertiesEffects, ReservationsEffects, PaymentsEffects, ContactsEffects, DocumentsEffects];
export * from './properties/properties.effect';
export * from './reservations/reservations.effect';
export * from './payments/payments.effect';
export * from './contacts/contacts.effect';
export * from './documents/documents.effect';


import { Injectable } from "@angular/core";
import * as documentReferences from '../references/documents.reference';
import { Document } from '../models';
import * as faker from 'faker';

@Injectable()
export class DocumentsFaker {
    generate(nbr: number, nomenclatureType, nomenclature, link): Document[] {
        let documents: Document[] = [];
        for (let n = 0; n < nbr; n++) {
            let document: Document = {
                kind: 'Document',
                id: faker.random.number(),
                title: faker.lorem.words(3),
                description: faker.lorem.paragraph(),
                type: faker.random.arrayElement(documentReferences.types),
                createdAt: faker.date.past(),
                file: { name: faker.system.fileName(), size: 20, type: 'application/pdf' },
                nomenclatureType: documentReferences.getCategoryType(nomenclatureType),
                nomenclature,
                nomenclatureLink: link,
                propertyId: nomenclatureType === 1 ? nomenclature.id : nomenclature.property.id
            };
            documents.push(document);
        }
        return documents;
    }
}
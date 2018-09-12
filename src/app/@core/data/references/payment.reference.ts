
export const types: any[] = [
    {
        id: 1,
        value: 'Acompte Séjour',
        isIncome: true,
        isOutgo: false,
        reservation: true,
        service: false,
    },
    {
        id: 2,
        value: 'Solde Séjour',
        isIncome: true,
        isOutgo: false,
        reservation: true,
        service: false,
    },
    {
        id: 3,
        value: 'Caution',
        isIncome: true,
        isOutgo: false,
        reservation: true,
        service: false,
    },
    {
        id: 4,
        value: 'Frais Séjour',
        isIncome: true,
        isOutgo: false,
        reservation: true,
        service: false,
    },
    {
        id: 5,
        value: 'Remboursement',
        isIncome: true,
        isOutgo: false,
        reservation: true,
        service: true,
    },
    {
        id: 6,
        value: 'Taxe Séjour',
        isIncome: false,
        isOutgo: true,
        reservation: true,
        service: false,
    },
    {
        id: 7,
        value: 'Remise Séjour',
        isIncome: false,
        isOutgo: true,
        reservation: true,
        service: false,
    },
    {
        id: 8,
        value: 'Frais Service',
        isIncome: false,
        isOutgo: true,
        reservation: true,
        service: false,
    },
    {
        id: 9,
        value: 'Remboursement',
        isIncome: false,
        isOutgo: true,
        reservation: true,
        service: true,
    },
    {
        id: 10,
        value: 'Charge déductible',
        isIncome: false,
        isOutgo: true,
        reservation: false,
        service: true,
    },
    {
        id: 11,
        value: 'Charge non déductible',
        isIncome: false,
        isOutgo: true,
        reservation: false,
        service: true,
    },
    {
        id: 12,
        value: 'Autre dépense',
        isIncome: false,
        isOutgo: true,
        reservation: true,
        service: true,
    },
    {
        id: 13,
        value: 'Régularisation de charges',
        isIncome: true,
        isOutgo: false,
        reservation: false,
        service: true,
    },
    {
        id: 14,
        value: 'Autre revenue',
        isIncome: true,
        isOutgo: false,
        reservation: true,
        service: true,
    },
];

export const statuses: any[] = [
    {
        id: 1,
        value: 'Reglé',
        cssClass: 'nb-badge nb-badge-success',
    },
    {
        id: 2,
        value: 'En attente',
        cssClass: 'nb-badge nb-badge-primary',
    },
    {
        id: 3,
        value: 'En retard',
        cssClass: 'nb-badge nb-badge-danger',
    },
    {
        id: 4,
        value: 'Annulé',
        cssClass: 'nb-badge nb-badge-danger',
    },
    {
        id: 5,
        value: 'En litige',
        cssClass: 'nb-badge nb-badge-warning',
    },
];

export const methods: any[] = [
    {
        id: 1,
        value: 'Carte de crédit',
    },
    {
        id: 2,
        value: 'Espèces',
    },
    {
        id: 3,
        value: 'Chèque',
    },
    {
        id: 4,
        value: 'Prélèvement',
    },
    {
        id: 5,
        value: 'Virement',
    }
];


export function getStatus(id: number) {
    return statuses.find(status => {
        return status.id === id;
    });
}

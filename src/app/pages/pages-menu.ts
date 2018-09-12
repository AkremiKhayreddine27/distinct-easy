import { NbMenuItem } from "@nebular/theme";

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: "Tableau de bord",
    icon: "nb-grid-a-outline",
    link: "/pages/dashboard",
    //link: '/pages/under-construction',
    home: true
  },
  {
    title: "Biens",
    icon: "nb-home",
    link: "/pages/properties"
  },
  {
    title: "Réservations",
    icon: "lnr lnr-clock",
    link: "/pages/reservations"
  },
  {
    title: "Services",
    icon: "nb-gear",
    link: "/pages/categories"
  },
  {
    title: "Finances",
    icon: "nb-bar-chart",
    link: "/pages/finances"
  },
  {
    title: "Contacts",
    icon: "lnr lnr-users",
    link: "/pages/contacts"
  },
  {
    title: "Documents",
    icon: "lnr lnr-book",
    link: "/pages/documents"
  }
];

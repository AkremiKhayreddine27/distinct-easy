import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'contacts',
      loadChildren: './contacts/contacts.module#ContactsModule'
    },
    {
      path: 'reservations',
      loadChildren: './reservations/reservations.module#ReservationsModule'
    },
    {
      path: 'documents',
      loadChildren: './documents/documents.module#DocumentsModule'
    },
    {
      path: 'miscellaneous',
      loadChildren: './miscellaneous/miscellaneous.module#MiscellaneousModule',
    },
    {
      path: '',
      redirectTo: 'miscellaneous',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}

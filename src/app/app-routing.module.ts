import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {VoyageListComponent} from './voyage-list/voyage-list.component';
import {VoyageComponent} from './voyage/voyage.component';
import {ReservationComponent} from './reservation/reservation.component';
import {AuthServiceGuard} from './auth/auth-service.guard';
import {LoginComponent} from './login/login.component';
import { ReservationClientComponent } from './reservation-client/reservation-client.component';
import { ProfilComponent } from './profil/profil.component';
import {NewClientComponent} from './new-client/new-client.component';
import { SuccessDeleteReservationComponent } from './success-delete-reservation/success-delete-reservation.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'voyages',
    component: VoyageListComponent,
  },
  {
    path: 'voyage/:id',
    component: VoyageComponent,
  },
  {
    path: 'reservation/:id',
    component: ReservationComponent,
    canActivate: [AuthServiceGuard]

  },
  {
    path: 'mes-reservations',
    component: ReservationClientComponent,
    canActivate: [AuthServiceGuard]
  },
  {
    path: 'profil',
    component: ProfilComponent,
    canActivate: [AuthServiceGuard]
  },
  {
    path: 'new-user',
    component: NewClientComponent,
  },
  {
    path: 'suppression-reservation',
    component: SuccessDeleteReservationComponent
  },
  {
    path: '**',
    redirectTo: 'voyages'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

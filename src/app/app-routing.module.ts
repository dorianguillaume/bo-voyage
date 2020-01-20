import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VoyageListComponent } from './voyage-list/voyage-list.component';
import { VoyageComponent } from './voyage/voyage.component';
import { ReservationComponent } from './reservation/reservation.component';


const routes: Routes = [
  {
    path: 'voyages',
    component: VoyageListComponent
  },
  {
    path: 'voyage/:id',
    component: VoyageComponent
  },
  {
    path: 'reservation/:id',
    component: ReservationComponent
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
export class AppRoutingModule { }

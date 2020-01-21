import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { CustomFormsModule } from 'ng2-validation';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InMemoryDataService } from './shared/in-memory-data.service';
import { VoyageListComponent } from './voyage-list/voyage-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { VoyageComponent } from './voyage/voyage.component';
import { ReservationComponent } from './reservation/reservation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ReservationClientComponent } from './reservation-client/reservation-client.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { ProfilComponent } from './profil/profil.component';
import { NewClientComponent } from './new-client/new-client.component';
import { SuccessDeleteReservationComponent } from './success-delete-reservation/success-delete-reservation.component';

registerLocaleData(localeFr, 'fr');



@NgModule({
  declarations: [
    AppComponent,
    VoyageListComponent,
    NavbarComponent,
    FooterComponent,
    VoyageComponent,
    ReservationComponent,
    LoginComponent,
    ReservationClientComponent,
    ProfilComponent,
    NewClientComponent,
    SuccessDeleteReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CustomFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

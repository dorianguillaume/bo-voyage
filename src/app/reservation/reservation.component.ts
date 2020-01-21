import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormArray, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {CustomValidators} from 'ng2-validation';
import {ActivatedRoute, Router} from '@angular/router';
import {ReservationService} from '../shared/reservation.service';
import {Reservation} from '../model/reservation';
import {AuthService} from '../shared/auth.service';
import {FormuleService} from '../shared/formule.service';
import {ClientService} from '../shared/client.service';
import {Voyageur} from '../model/voyageur';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  reservationForm: FormGroup;
  nbPlaces: number;
  nbAccompagnant = 0;
  prix: number;
  prixFinal: number;
  prixEnfant: number


  constructor(private activatedRoute: ActivatedRoute, private reservationService: ReservationService,
              private authService: AuthService, private router: Router, private formuleService: FormuleService, private clientService: ClientService) {
  }

  ngOnInit() {
    this.reservationForm = new FormGroup({
      accompagnants: new FormArray([]),
      carteNum: new FormControl('', [Validators.required, CustomValidators.rangeLength([16, 16]), CustomValidators.number]),
      moisExpiration: new FormControl('', [Validators.required, CustomValidators.range([0, 12]), CustomValidators.number]),
      anneeExpiration: new FormControl('', [Validators.required, CustomValidators.range([1900, 2100]), CustomValidators.number]),
      ccv: new FormControl('', [Validators.required, CustomValidators.rangeLength([3, 3]), CustomValidators.number]),
      assurance: new FormControl()
    });

    //On récupère le nombre de place et le prix de la formule
    this.activatedRoute.paramMap.subscribe(
      params => {
        this.formuleService.find(params.get('id')).subscribe(
          formule => {
            this.nbPlaces = --formule.nb_places;
            this.prix = +formule.prix_ht;
            this.prixEnfant = this.prix * 0.6
            this.prixFinal = this.prix;
          }
        );
      }
    );
  }

  get accompagnants(): FormArray {
    return this.reservationForm.get('accompagnants') as FormArray;
  }

  get carteNum() {
    return this.reservationForm.controls.carteNum;
  }

  get moisExpiration() {
    return this.reservationForm.controls.moisExpiration;
  }

  get anneeExpiration() {
    return this.reservationForm.controls.anneeExpiration;
  }

  get ccv() {
    return this.reservationForm.controls.ccv;
  }

  getAssurance() {
    return this.reservationForm.controls.assurance;
  }

  addReservation() {

    this.activatedRoute.paramMap.subscribe(
      (params) => {
        //+params.get('id') ==> parseToInt
        const reservation = new Reservation(this.authService.user.id, +params.get('id'), new Date(), this.getAssurance().value, this.prixFinal, this.nbAccompagnant);

        this.reservationService.create(reservation).subscribe();

        this.accompagnants.value.forEach(accompagnant => {
          this.clientService.create(new Voyageur(accompagnant.civilite, accompagnant.nom, accompagnant.prenom, accompagnant.naissance, accompagnant.tel, accompagnant.adresse, accompagnant.ville, accompagnant.code_postale, null, null)).subscribe(
            () => {
              console.log('valide');
            }
          );
        });

        this.formuleService.updatePlace(+params.get('id'), this.nbAccompagnant + 1);


        this.router.navigate(['/mes-reservations']);
      });
  }

  addAccompagnant() {
    this.nbAccompagnant++;
    this.nbPlaces--;

    this.prixFinal += this.prix;
    this.accompagnants.push(new FormGroup({
      civilite: new FormControl('', [Validators.required]),
      nom: new FormControl('', [Validators.required]),
      prenom: new FormControl('', [Validators.required]),
      naissance: new FormControl('', [Validators.required]),
      adresse: new FormControl('', [Validators.required]),
      ville: new FormControl('', [Validators.required]),
      code_postale: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(5), CustomValidators.number]),
      tel: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), CustomValidators.number]),
    }))
  }


  delAccompagnant(index) {
    this.nbPlaces++;
    this.nbAccompagnant--;
    this.prixFinal -= this.prix;
    this.accompagnants.removeAt(index);
  }

  isEnfant(event) {
    const naiss = event.target.value;
    const timeDiff = Math.abs(Date.now() - new Date(naiss).getTime());
    return (Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25) >= 12);
  }
}

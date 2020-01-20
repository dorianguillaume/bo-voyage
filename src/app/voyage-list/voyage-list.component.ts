import {Component, OnInit} from '@angular/core';
import {FormuleService} from '../shared/formule.service';
import {Formule} from '../model/formule';

@Component({
  selector: 'app-voyage-list',
  templateUrl: './voyage-list.component.html',
  styleUrls: ['./voyage-list.component.css']
})
export class VoyageListComponent implements OnInit {

  formules: Formule[];

  /* Instanciation du service pour récupérer les formules */
  constructor(private formuleService: FormuleService) {
  }

  ngOnInit() {
    /* Récupération de la liste des formules au travers d'une promesse */
    this.formuleService.getAll().subscribe(
      (formules) => {
        this.formules = formules;
      });
  }
}

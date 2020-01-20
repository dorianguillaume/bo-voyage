import {Component, OnInit} from '@angular/core';
import {VoyageService} from '../shared/voyage.service';
import {Formule} from '../model/formule';

@Component({
  selector: 'app-voyage-list',
  templateUrl: './voyage-list.component.html',
  styleUrls: ['./voyage-list.component.css']
})
export class VoyageListComponent implements OnInit {

  formules: Formule[];

  constructor(private voyageService: VoyageService) {
  }

  ngOnInit() {
    this.voyageService.getAll().subscribe(
      (formules) => {
        this.formules = formules;
      });
  }
}

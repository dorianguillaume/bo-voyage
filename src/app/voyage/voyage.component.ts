import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormuleService } from '../shared/formule.service';

@Component({
  selector: 'app-voyage',
  templateUrl: './voyage.component.html',
  styleUrls: ['./voyage.component.css']
})
export class VoyageComponent implements OnInit {

  private voyage

  constructor(private activatedRoute: ActivatedRoute, private formuleService: FormuleService ) { }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe(
      params => {
        const id = params.get('id')
        this.formuleService.find(id).subscribe(
          voyage => {
            this.voyage = voyage
          }
        )
      }
    )
  }

  reserved(){

  }
}

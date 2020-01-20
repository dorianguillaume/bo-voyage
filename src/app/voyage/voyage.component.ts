import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VoyageService } from '../shared/voyage.service';

@Component({
  selector: 'app-voyage',
  templateUrl: './voyage.component.html',
  styleUrls: ['./voyage.component.css']
})
export class VoyageComponent implements OnInit {

  private voyage

  constructor(private activatedRoute: ActivatedRoute, private voyageService: VoyageService ) { }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe(
      params => {
        const id = params.get('id')
        this.voyageService.find(id).subscribe(
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

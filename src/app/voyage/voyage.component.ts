import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VoyageService } from '../shared/voyage.service';

@Component({
  selector: 'app-voyage',
  templateUrl: './voyage.component.html',
  styleUrls: ['./voyage.component.css']
})
export class VoyageComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private voyageService: VoyageService ) { }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe(
      params => {
        this.voyageService
      }
    )
  }

}

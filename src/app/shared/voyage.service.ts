import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class VoyageService {

  constructor(private activatedRoute: ActivatedRoute, private voyageService: VoyageService ) {}
    
}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'BoVoyages';

  constructor(private httpClient: HttpClient){}
  ngOnInit(){
    this.httpClient.get('api/formules').subscribe(
      (res) => console.log(res)
    );

    this.httpClient.get('api/voyageurs').subscribe(
      (res) => console.log(res)
    );

    this.httpClient.get('api/voyageurs/2').subscribe(
      (res) => console.log(res)
    );

    this.httpClient.get('api/formules/2').subscribe(
      (res) => console.log(res)
    );
  }
}

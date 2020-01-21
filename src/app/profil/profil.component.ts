import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { ClientService } from '../shared/client.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  user

  constructor(private authService: AuthService, private clientService: ClientService) { }

  ngOnInit() {
    this.clientService.find(this.authService.user.id).subscribe(
      user => {
        this.user = user
      }
    )
  }

}

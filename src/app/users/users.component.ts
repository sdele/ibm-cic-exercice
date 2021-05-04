import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public data = {};

  constructor(
    private userService : UserService
  ) { }

  ngOnInit() {
    // A l'initiation du composant on récupère les données de l'API via le userService
    this.userService.getRandomUser().subscribe(users => this.data = users);
  }



}

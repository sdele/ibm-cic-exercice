import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  // par simplicité pour l'exercice on type avec any mais ce n'est pas recommandé !
  // N'hésitez pas à créer des interfaces pour manipuler et contrôler vos données
  public data: any = {};

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    // A l'initiation du composant on récupère les données de l'API via le userService
    this.userService.getRandomUser().subscribe(users => this.data = users);
  }

  deleteUser(uuid) {
    // Vous pouvez vérifier en console qu'on récupère bien le uuid
    console.log(uuid);
    this.data.results = this.data.results.filter(u => u.login.uuid !== uuid);
  }

}

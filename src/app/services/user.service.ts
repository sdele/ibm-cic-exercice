import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  private randomUserApi = 'https://randomuser.me/api';

  getRandomUser() {
    return this.http.get(this.randomUserApi + '?results=10')
  }

}

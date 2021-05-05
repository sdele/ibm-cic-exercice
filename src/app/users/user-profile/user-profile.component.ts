import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  @Input() user;
  @Output() deleteEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  sendSeed() {
    // Envoie la valeur seed via l'émission de l'événement deleteEvent
    this.deleteEvent.emit(this.user.login.uuid);
  }

}

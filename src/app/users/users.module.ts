import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [UsersComponent, UserProfileComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class UsersModule { }

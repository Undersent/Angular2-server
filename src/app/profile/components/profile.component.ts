import { Component } from '@angular/core';
import {ProfileService} from '../services/profile.service';



@Component({
  selector: 'my-profile',
  template: `
    <my-info
     [name]="profileService.currentUser.name"
     (updateProfile)="onUpdateProfile($event)">
    </my-info>
  `
})
export class ProfileComponent {
  constructor(
    public profileService: ProfileService
  ) {}

  public onUpdateProfile(name: string) {
    this.profileService.updateProfile(name);
    window.history.back();
  }
}

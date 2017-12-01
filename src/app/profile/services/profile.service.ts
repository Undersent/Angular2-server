import { Injectable } from '@angular/core';

import { User } from '../models/user.model';

@Injectable()
export class ProfileService {
  currentUser: User = {
    _id: '0',
    name: 'Jack'
  };

  updateProfile(name: string): void {
    this.currentUser.name = name;
  }
}

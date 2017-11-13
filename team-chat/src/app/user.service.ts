import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class UserService {

  public user: User;
  private isLoggedIn: boolean;

  constructor() {
  }

  LogIn(user: User): void {
    this.isLoggedIn = true;
    this.user = user;
  }

  IsLoggedIn(){
    return this.isLoggedIn;
  }
}

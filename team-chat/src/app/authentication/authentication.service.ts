import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../user';

const authUrl: string = 'http://localhost:3000/api/users/login';

@Injectable()
export class AuthenticationService {

  private user: User;
  private authenticated;

  constructor(  private http: HttpClient) {
    this.authenticated = false;
  }

  Authenticate(user: User): Observable<boolean> {
    this.user = user;
    let body = user;

    return this.http.post<boolean>(authUrl, body);
  }

  setAuthenticated(): void {
    this.authenticated = true;
  }

  setUser(user: User): void {
    this.user = user;
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }
}

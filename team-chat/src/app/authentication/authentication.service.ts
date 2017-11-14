import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../user';

const authUrl: string = 'http://10.103.50.36:3000/login';

@Injectable()
export class AuthenticationService {

  private user: User;
  private authenticated;

  constructor(  private http: HttpClient) {
    this.authenticated = false;
  }

  Authenticate(user: User): Observable<boolean> {
    this.user = user;
   let params = new HttpParams()
     .set('username', this.user.name)
     .set('password', this.user.password);

   return this.http.get<boolean>(authUrl, {params: params});
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

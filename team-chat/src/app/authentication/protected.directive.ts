import { Directive, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Directive({ selector: '[protected]' })

export class ProtectedDirective {
  constructor(private router: Router, private authService: AuthenticationService) {
    if(!this.authService.isAuthenticated()){
      this.router.navigate(['login-form']);
    }
  }

}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { ServerAuthenticationService } from '../server-authentication.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginFormComponent implements OnInit {
  user: User = {
    name: '',
    password: ''
  };

  constructor(private router: Router, private userService: UserService, private serverAuth: ServerAuthenticationService) {
  }

  ngOnInit() {
  }

  loginUser(): void
  {
    this.userService.LogIn(this.user);
    this.serverAuth.Authenticate().subscribe(res=>{

      if (res === true) {
        this.router.navigate(['dashboard']);
      } else {
        this.user.name = this.user.name + "1";
      }
    })

  }

}

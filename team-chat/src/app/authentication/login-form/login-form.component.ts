import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from '../../user';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

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

  constructor(private router: Router, private serverAuth: AuthenticationService) {
  }

  ngOnInit() {
  }

  loginUser(): void
  {
    this.serverAuth.Authenticate(this.user).subscribe(res=>{
      if (res === true) {
        this.serverAuth.setAuthenticated();
        this.serverAuth.setUser(this.user);
        console.log(this.serverAuth.isAuthenticated());
        this.router.navigate(['chat-board']);
      } else {
      }
    })

  }

}

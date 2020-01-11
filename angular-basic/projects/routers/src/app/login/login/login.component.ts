import { LoginService } from './../../login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private login: LoginService
  ) { }

  ngOnInit() {

  }

  toProfile(usId: string) {

    this.login.checkValidity(usId, 'android')
    console.log('Login isValid',this.login.isValid)
    this.router.navigate(['profile', usId], {
      queryParams: {
        src: 'mb'
      }
    })
  }
}

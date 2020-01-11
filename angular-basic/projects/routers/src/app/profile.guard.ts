import { LoginService } from './login.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileGuard implements CanActivate {

  constructor(
    private router: Router,
    private login: LoginService
  ) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {

    const url = 'profile/10'
    console.log('Validity in Gurad', this.login.isValid)
    const profiePageTree = this.router.parseUrl(url)
    console.log(profiePageTree.toString())
    return this.login.isValid ? profiePageTree : new UrlTree()
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isValid = false
  constructor(

  ) { }

  checkValidity(usNm: string, pass: string) {
    return this.isValid = (usNm === 'android' && pass === 'android')
  }
}

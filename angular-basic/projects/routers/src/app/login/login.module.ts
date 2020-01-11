import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FpComponent } from './fp/fp.component';

@NgModule({
  declarations: [LoginComponent, FpComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class LoginModule { }

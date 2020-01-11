import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RfComponent } from './rf/rf.component';
import { TfComponent } from './tf/tf.component';

@NgModule({
  declarations: [
    AppComponent,
    RfComponent,
    TfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // template driven forms
    ReactiveFormsModule // Reactive Forms
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

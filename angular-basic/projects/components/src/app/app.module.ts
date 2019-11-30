import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DefinationComponent } from './defination/defination.component';
import { CodeBtnComponent } from './code-btn/code-btn.component';
import { RoundBtnComponent } from './code-btn/round-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    DefinationComponent,
    CodeBtnComponent,
    RoundBtnComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

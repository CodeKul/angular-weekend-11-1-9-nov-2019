import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { BarComponent } from './bar/bar.component';
import { OpsBtnComponent } from './ops-btn/ops-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,
    BarComponent,
    OpsBtnComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

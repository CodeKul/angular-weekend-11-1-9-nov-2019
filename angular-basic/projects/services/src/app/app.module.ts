import { FormsModule } from '@angular/forms';
import { LogicalService, DataService } from './logical.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IpBxComponent } from './ip-bx/ip-bx.component';
import { StyBxComponent } from './sty-bx/sty-bx.component';
import { FnlBxComponent } from './fnl-bx/fnl-bx.component';

@NgModule({
  declarations: [
    AppComponent,
    IpBxComponent,
    StyBxComponent,
    FnlBxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  // providers: [LogicalService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

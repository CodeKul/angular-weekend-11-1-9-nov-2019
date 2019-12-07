import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OurNavComponent } from './our-nav/our-nav.component';
import { PageInfoComponent } from './page-info/page-info.component';
import { CardDeckComponent } from './card-deck/card-deck.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    OurNavComponent,
    PageInfoComponent,
    CardDeckComponent,
    CardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

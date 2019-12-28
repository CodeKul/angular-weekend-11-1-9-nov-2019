import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'lifecycle';
  isVs = false
  nm = 0

  btn() {
    this.isVs = !this.isVs
  }

  ch() {
    this.nm = Math.random() * 255
  }
}

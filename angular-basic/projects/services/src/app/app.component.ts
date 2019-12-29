import { Component } from '@angular/core';
import { LogicalService } from './logical.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [LogicalService],
})
export class AppComponent {
  title = 'services';
}

import { Invoivce } from './data';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directives';
  isTab = false

  isInfo = false
  isDanger = false

  invoices: Array<Invoivce> = [
    { date: '22 Dec 2019', from: 'codekul', to: 'company', amount: 45000, qty: 3, gst: 18 },
    { date: '21 Dec 2019', from: 'company', to: 'codekul', amount: 5000, qty: 1, gst: 18 },
    { date: '20 Dec 2019', from: 'codekul', to: 'melayer', amount: 58900, qty: 6, gst: 18 },
    { date: '19 Dec 2019', from: 'melayer', to: 'rbl', amount: 75000, qty: 8, gst: 18 },
    { date: '18 Dec 2019', from: 'watch', to: 'codekul', amount: 521300, qty: 1, gst: 18 },
    { date: '17 Dec 2019', from: 'latptop', to: 'melayer', amount: 75000, qty: 1, gst: 18 }
  ]

  sty = {
    border : '1px solid red'
  }
}

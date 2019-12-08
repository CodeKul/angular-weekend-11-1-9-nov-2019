import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'databinding topic at codekul';
  brd = '1px solid red'
  rd = 'yellow'
  typ = 'button'
  sty = {
    border: '1px solid red',
    color: 'red'
  }
  clk(ev: MouseEvent) {
    console.log(ev)
    this.title = new Date().toString()
    console.log(`Clicked ${this.title}`)
  }
}

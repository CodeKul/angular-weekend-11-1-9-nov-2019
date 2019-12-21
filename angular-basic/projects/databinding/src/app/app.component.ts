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

  wdParent = 89

  clk(ev: MouseEvent) {
    console.log(ev)
    this.title = new Date().toString()
    console.log(`Clicked ${this.title}`)
  }
  progressing(btn: number) {
    if (btn) {
      this.wdParent += 2
    } else {
      this.wdParent -= 2
    }
  }
}

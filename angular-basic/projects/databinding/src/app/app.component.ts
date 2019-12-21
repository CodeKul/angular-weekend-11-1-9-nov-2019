import { Component, ElementRef, ViewChild } from '@angular/core';

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

  @ViewChild('ipHi', { static: false }) // angular8 
  ipjjjjjjjj: ElementRef

  @ViewChild('para', { static: false })
  para: ElementRef

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

  sayHi(/*ip: any*/) {
    console.log(this.ipjjjjjjjj.nativeElement)
    this.ipjjjjjjjj.nativeElement.style.border = '2px solid red'

    console.log(this.para.nativeElement)
  }
}

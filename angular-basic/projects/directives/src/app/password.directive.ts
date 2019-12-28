import { Directive, ElementRef, Renderer2, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pass]'
})
export class PasswordDirective {

  @Input('pass')
  @HostBinding('style.border')
  brd: string

  @HostBinding('value')
  passVal: string

  constructor(
    private elRf: ElementRef,
    private rend: Renderer2
  ) {
    console.log(this.elRf.nativeElement)
    // this.elRf.nativeElement.style.border = '1px solid red'

    // this.rend.setStyle(this.elRf.nativeElement, 'border', '1px solid red')

    this.brd = '1px solid red'
  }

  @HostListener('keyup', ['$event'])
  keys(ev: KeyboardEvent) {
    console.log(ev.target['value'])
    this.passVal = ev.target['value'].toUpperCase()
  }
}

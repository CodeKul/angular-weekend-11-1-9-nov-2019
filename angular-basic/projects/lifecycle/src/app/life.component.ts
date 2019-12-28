import { Component, SimpleChanges, Input } from '@angular/core';
import {
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core'

@Component({
  selector: 'app-life',
  template: `
    <p>
      life works!
    </p>
  `,
  styles: []
})
export class LifeComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input()
  span : number

  constructor() { }

  ngOnChanges(ch: SimpleChanges) {
    console.log(ch)
    console.log('ngOnChanges')
  }

  ngOnInit() {
    console.log('ngOnInit')
  }

  ngDoCheck() {
    console.log('ngDoCheck')
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit')
  }

  ngAfterContentChecked() {
    console.log(`ngAfterContentChecked`)
  }

  ngAfterViewInit() {
    console.log(`ngAfterViewInit`)
  }

  ngAfterViewChecked() {
    console.log(`ngAfterViewChecked`)
  }

  ngOnDestroy() {
    console.log(`ngOnDestroy`)
  }
}

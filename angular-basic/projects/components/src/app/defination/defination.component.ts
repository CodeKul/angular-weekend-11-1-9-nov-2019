import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-defination',
  template: ` 
    <p> 
      Decorator that marks a class as an Angular component and provides configuration metadata that determines how the component should be processed, instantiated, and used at runtime. 
    </p>
    <app-code-btn></app-code-btn>
  `,
  styles: [` p { 
    color : red;
  } `]
})
export class DefinationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

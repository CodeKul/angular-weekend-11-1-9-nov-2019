import { Component, OnInit, EventEmitter, Output, ElementRef, ViewChild, ContentChild } from '@angular/core';

@Component({
  selector: 'app-ops-btn',
  templateUrl: './ops-btn.component.html',
  styleUrls: ['./ops-btn.component.css']
})
export class OpsBtnComponent implements OnInit {

  @Output()
  progress: EventEmitter<number> = new EventEmitter()

  @ContentChild('para', { static: true })
  para: ElementRef

  constructor() { }

  ngOnInit() {
  }

  onProgress(btn: number) {
    this.progress.emit(btn)

    console.log(this.para.nativeElement)
  }
}

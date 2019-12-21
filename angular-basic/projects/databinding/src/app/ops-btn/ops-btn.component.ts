import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ops-btn',
  templateUrl: './ops-btn.component.html',
  styleUrls: ['./ops-btn.component.css']
})
export class OpsBtnComponent implements OnInit {

  @Output()
  progress: EventEmitter<number> = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  onProgress(btn: number) {
    this.progress.emit(btn)
  }
}

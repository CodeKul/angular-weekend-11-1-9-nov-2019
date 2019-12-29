import { Component, OnInit } from '@angular/core';
import { LogicalService } from '../logical.service';

@Component({
  selector: 'app-sty-bx',
  templateUrl: './sty-bx.component.html',
  styleUrls: ['./sty-bx.component.css'],
  // providers : [LogicalService]
})
export class StyBxComponent implements OnInit {

  tax = 0
  total = 0
  constructor(
    private logic: LogicalService
  ) { }

  ngOnInit() {
  }

  onTaxCh() {
    console.log(this.tax)
    this.logic.tax = this.tax
    this.total = (this.logic.price * this.logic.qty) + this.logic.tax
   }
}

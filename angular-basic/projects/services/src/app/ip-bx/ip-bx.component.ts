import { LogicalService } from './../logical.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ip-bx',
  templateUrl: './ip-bx.component.html',
  styleUrls: ['./ip-bx.component.css'],
  // providers : [LogicalService]
})
export class IpBxComponent implements OnInit {

  qty = 0
  price = 0

  constructor(
    private logic : LogicalService
  ) { }

  ngOnInit() {
  }

  onQtyCh() {
    console.log(this.qty)
    this.logic.qty = this.qty
  }

  onPriceCh() {
    console.log(this.price)
    this.logic.price = this.price
    this.logic.total = (this.logic.price * this.logic.qty) + this.logic.tax
  }
}

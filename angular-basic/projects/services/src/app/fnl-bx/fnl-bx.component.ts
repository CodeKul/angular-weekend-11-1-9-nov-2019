import { LogicalService } from './../logical.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fnl-bx',
  templateUrl: './fnl-bx.component.html',
  styleUrls: ['./fnl-bx.component.css'],
  // providers : [LogicalService]
})
export class FnlBxComponent implements OnInit {

  constructor(
    private logic : LogicalService
  ) { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tf',
  templateUrl: './tf.component.html',
  styleUrls: ['./tf.component.css']
})
export class TfComponent implements OnInit {

  domain = {
    email : 'a@a.com',
    pass : 'slkgksdflg',
    add : 'sdlkkjslfkgj',
    add2:'svssfgdsfgeret',
    city : 'pune',
    zip : '756'
  }
  constructor() { }

  ngOnInit() {
  }

  onSub(frm : NgForm) {
    console.log(`Form Submitted`)
    console.log(frm)
    console.log(frm.value)
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rf',
  templateUrl: './rf.component.html',
  styleUrls: ['./rf.component.css']
})
export class RfComponent implements OnInit {

  form: FormGroup
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {

    const pa = Validators.compose([
      Validators.required,
      Validators.email
    ])
    
    this.form = this.fb.group({
      email: this.fb.control('', pa),
      password: this.fb.control('', Validators.required),
      address: this.fb.control('', Validators.required),
      address2: this.fb.control(''),
      city: this.fb.control('', Validators.required),
      state: this.fb.control('', Validators.required),
      zip: this.fb.control(''),
      keepMe: this.fb.control(false)
    })
  }

  frmSub() {
    console.log(`Form Submitted`)
    console.log(this.form)
  }

  formControlValidationStatus(name: string) {
    return this.form.get(name).valid
  }
}

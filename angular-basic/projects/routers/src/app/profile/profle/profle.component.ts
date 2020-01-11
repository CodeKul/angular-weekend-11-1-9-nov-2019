import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profle',
  templateUrl: './profle.component.html',
  styleUrls: ['./profle.component.css']
})
export class ProfleComponent implements OnInit {

  profileName: string
  source: string
  constructor(
    private router : Router,
    private actRt: ActivatedRoute
  ) { }

  ngOnInit() {
    this.actRt.params.subscribe(prm => this.profileName = prm['us'])

    this.actRt.queryParams.subscribe(prm => this.source = prm['src'])
  }

  toAnalytics()  {
    this.router.navigate(['analytics'])
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  toChart(chart: number) {
    if (chart === 1)
      this.router.navigate(['pie'])
    else if (chart === 2)
      this.router.navigate(['line'])
    else
      this.router.navigate(['bar'])
  }

}

import { Observer, Subscription } from 'rxjs';
import { Component } from '@angular/core';
import { DataService } from './data-service';
import { interval } from 'rxjs';
import { User } from './domain';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'http';
  private subAd: Subscription
  users: Array<User>

  constructor(
    private data: DataService
  ) {

  }
  ngOnInit() {

  }

  myInterval() {
    interval(1000).subscribe(
      cnt => this.title = `${cnt}`
    )
  }

  myObs() {
    const obs: Observer<number> = {
      next: nm => console.log(nm),
      error: err => console.log(err),
      complete: () => console.log('completed')
    }
    this.subAd = this.data.manageAsyncAd().subscribe(obs)
  }

  onClk() {
    this.data.listUsers().subscribe(
      res => {
        console.log(res.data)
        this.users = res.data
      })
  }

  ngOnDestroy() {
    this.subAd.unsubscribe()
  }
}

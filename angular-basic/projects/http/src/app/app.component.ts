import { Observer, Subscription } from 'rxjs';
import { Component } from '@angular/core';
import { DataService } from './data-service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'http';
  private subAd : Subscription

  constructor(
    private data: DataService
  ) {

  }
  ngOnInit() {
    const obs: Observer<number> = {
      next: nm => console.log(nm),
      error: err => console.log(err),
      complete: () => console.log('completed')
    }
    this.subAd = this.data.manageAsyncAd().subscribe(obs)

    interval(1000).subscribe( 
      cnt => this.title = `${cnt}`
     )
  }

  ngOnDestroy() {
    this.subAd.unsubscribe()
  }
}

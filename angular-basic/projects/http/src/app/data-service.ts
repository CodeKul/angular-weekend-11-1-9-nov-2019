import { Observable, Observer } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DataService {

    manageAsyncAd(): Observable<number> {
        return Observable.create(
            (obs: Observer<number>) => {
                for (let i = 1; i < 1000; i++) {
                    if (i % 2) obs.next(i)
                    // else obs.error(new Error('Not Even'))
                }
                obs.complete()
            }
        )
    }
}
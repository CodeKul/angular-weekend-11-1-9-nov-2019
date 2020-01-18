import { Observable, Observer } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './domain';

@Injectable({ providedIn: 'root' })
export class DataService {

    constructor(
        private http : HttpClient
    ) { }

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

    listUsers() : Observable<Users> {
        return this.http.get<Users>('https://reqres.in/api/users?page=2')
    }
}
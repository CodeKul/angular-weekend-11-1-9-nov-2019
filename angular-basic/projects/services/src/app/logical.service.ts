import { EventEmitter, Injectable } from '@angular/core'
@Injectable({ providedIn: 'root' })
export class LogicalService {

  price = 0
  qty = 0
  tax = 0
  total = 0

  constructor() { }

  em: EventEmitter<number> = new EventEmitter()

  calAndEm() {
    this.total = (this.qty * this.price) + this.tax
    this.em.emit(this.total)
  }
}
@Injectable({ providedIn: 'root' })
export class DataService {

  constructor(
    private logic: LogicalService
  ) {

  }
}

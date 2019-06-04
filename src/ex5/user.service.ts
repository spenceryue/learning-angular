import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable()
export class UserService {
  active = [ 'Max', 'Anna' ];
  inactive = [ 'Chris', 'Manu' ];
  constructor(private counter: CounterService) {}
  makeInactive(index: number) {
    this.inactive.push(...this.active.splice(index, 1));
    this.counter.increment();
  }
  makeActive(index: number) {
    this.active.push(...this.inactive.splice(index, 1));
    this.counter.increment();
  }
  get count() {
    return this.counter.count;
  }
}

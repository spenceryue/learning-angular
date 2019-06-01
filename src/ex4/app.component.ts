import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-ex4',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
})
export class Ex4Component {
  counts = [];
  scrollTo = (ref: ElementRef) => {
    ref.nativeElement.scrollIntoView();
  };
  update(count: number) {
    if (count === 0) {
      this.counts = [];
      return;
    }
    this.counts.push(count);
  }
  getItemStyle(count: number) {
    return count % 2 === 0 ? { color: 'red' } : { color: 'blue' };
  }
  odd(counts) {
    return counts.filter(x => x % 2 === 1);
  }
  even(counts) {
    return counts.filter(x => x % 2 === 0);
  }
}

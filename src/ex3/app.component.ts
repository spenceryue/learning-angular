import { Component } from '@angular/core';

@Component({
  selector: 'app-ex3',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
})
export class Ex3Component {
  hidden = false;
  clicks = [];
  onClick() {
    this.hidden = !this.hidden;
    this.clicks.push(new Date());
  }
}

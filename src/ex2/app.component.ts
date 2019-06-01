import { Component } from '@angular/core';

@Component({
  selector: 'app-ex2',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
})
export class Ex2Component {
  username = '';
  reset() {
    this.username = '';
  }
}

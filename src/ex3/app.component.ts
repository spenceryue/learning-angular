import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
})
export class AppComponent {
  hidden = false;
  clicks = [];
  onClick() {
    this.hidden = !this.hidden;
    this.clicks.push(new Date());
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  styleUrls: [ './index.component.css' ],
  templateUrl: './index.component.html',
})
export class IndexComponent {
  getHomeStyles() {
    return { active: location.href.endsWith('/') };
  }
}

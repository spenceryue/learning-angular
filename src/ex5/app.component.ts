import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
})
export class Ex5Component {
  constructor(private userService: UserService) {}
  get active() {
    return this.userService.active;
  }
  get inactive() {
    return this.userService.inactive;
  }
  get count() {
    return this.userService.count;
  }
  makeInactive(index: number) {
    this.userService.makeInactive(index);
  }
  makeActive(index: number) {
    this.userService.makeActive(index);
  }
}

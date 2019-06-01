import { Component, Output, OnDestroy, EventEmitter, Input, OnInit } from '@angular/core';
enum States {
  START = 'START',
  PAUSE = 'PAUSE',
}
@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: [ './game-control.component.css' ],
})
export class GameControlComponent implements OnDestroy, OnInit {
  @Output() countChange = new EventEmitter<number>();
  @Input() nextState = States.PAUSE;
  defaultInterval = 1e2;
  @Input() interval = this.defaultInterval;
  fade = true;
  count = 0;
  timer = NaN;

  handleInput(event: KeyboardEvent) {
    const target = event.target as HTMLInputElement;
    this.fade = !target.value;
    const value = +target.value;
    if (value === 0) {
      this.interval = this.defaultInterval;
      target.value = '';
      return;
    }
    else if (value >= 1e6) {
      target.value = this.interval.toString();
      return;
    }
    else {
      const save = this.interval;
      this.interval = value;
      if (save !== this.interval && this.running()) {
        this.pause();
        this.start();
      }
    }
  }
  running() {
    return this.nextState === States.PAUSE;
  }
  ngOnInit() {
    this.defaultInterval = this.interval;
    this.toggleState();
  }
  toggleState() {
    switch (this.nextState) {
      case States.START: {
        this.nextState = States.PAUSE;
        this.start();
        break;
      }
      case States.PAUSE: {
        this.nextState = States.START;
        this.pause();
      }
    }
  }
  reset() {
    this.count = 0;
    this.push();
  }
  start() {
    this.pause();
    this.increment();
    this.timer = window.setInterval(this.increment.bind(this), this.interval);
  }
  pause() {
    window.clearInterval(this.timer);
  }
  push() {
    this.countChange.emit(this.count);
  }
  ngOnDestroy() {
    this.pause();
  }
  increment() {
    this.count++;
    this.push();
  }
  getLabelStyles() {
    return { fade: this.interval === this.defaultInterval };
  }
  getButtonStyles() {
    return {
      start: this.nextState === States.START,
      pause: this.nextState === States.PAUSE,
    };
  }
}

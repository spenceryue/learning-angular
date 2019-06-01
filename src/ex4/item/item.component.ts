import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: [ './item.component.css' ],
})
export class ItemComponent implements OnInit {
  @Input() init?: (ref: ElementRef) => void;
  @ViewChild('ref', { static: true })
  ref: ElementRef;
  ngOnInit() {
    this.init && this.init(this.ref);
  }
}

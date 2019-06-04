import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective implements OnInit {
  @Input() target?: Element;
  @Input('appDropdown') initialValue: string;
  @HostBinding('class.open') isOpen: boolean;
  @HostListener('document:click', [ '$event' ])
  toggleOpen(event: Event) {
    if (this.clickedTarget(event)) {
      this.isOpen = !this.isOpen;
    }
    else {
      this.isOpen = false;
    }
    this.target && this.target.classList.toggle('active', this.isOpen);
  }
  clickedTarget(event) {
    return this.target
      ? this.target.contains(event.target)
      : this.element.parentElement.contains(event.target);
  }
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit() {
    this.renderer.addClass(this.element, 'appDropdown');
    this.isOpen = Boolean(this.initialValue);
  }
  get element() {
    return this.elementRef.nativeElement;
  }
}

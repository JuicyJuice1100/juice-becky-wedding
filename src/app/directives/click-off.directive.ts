import { Directive, ElementRef, EventEmitter, Output, HostListener } from '@angular/core';

@Directive({
  selector: '[appClickOff]'
})
export class ClickOffDirective {
  @Output() offClick = new EventEmitter();

  constructor(private elementRef: ElementRef) { }

  @HostListener('document:click', ['$event.path'])
  public onGlobalClick(targetElementPath: Array<any>) {
    const elementRefInPath = targetElementPath.find(e => e === this.elementRef.nativeElement);
    if (!elementRefInPath) {
      this.offClick.emit(null);
    }
  }
}

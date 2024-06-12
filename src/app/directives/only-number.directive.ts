
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[OnlyNumber]'
})

export class OnlyNumber {
  private readonly regEx = new RegExp('^[0-9]*$');

  constructor(private el: ElementRef) { }

  @Input() OnlyNumber: boolean = true;
  @Input() maxlength: number = 20;

  @HostListener('keydown', ['$event']) onKeyDown(event) {
      console.log(event)
    let e = <KeyboardEvent> event;
    if (this.OnlyNumber) {
        if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
        (e.keyCode == 65 && e.ctrlKey === true) ||
        (e.keyCode == 67 && e.ctrlKey === true) ||
        (e.keyCode == 86 && e.ctrlKey === true) ||
        (e.keyCode == 88 && e.ctrlKey === true) ||
        (e.keyCode >= 35 && e.keyCode <= 39)) {
          return;
        }

      if (!this.isValid(event.key))
         e.preventDefault();
      
      }
  }

  private isValid(elegible: string): boolean {
    const current: string = this.el.nativeElement.value;
    const next: string = current.concat(elegible);
    return this.regEx.test(elegible) && !this.isOverSize(next);
  }

  private isOverSize(str: string): boolean {
    if (this.maxlength && str) {
      console.log(`${str.length} - ${this.maxlength}`)
      return str.length > this.maxlength; 
    }
    return false;
  }

}
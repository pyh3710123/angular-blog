/*自定义属性型指令*/

import { Directive,ElementRef,HostListener,Input }
  from '@angular/core';

@Directive({
  selector: '[appRedback]'
})

export class RedbackDirective {

  constructor(private el: ElementRef) { }

  @Input('appRedback') highlightColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {                      //接受输入值
    this.el.nativeElement.style.backgroundColor = color;
  }
}

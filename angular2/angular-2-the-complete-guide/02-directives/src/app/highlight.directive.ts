import { Directive, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  @HostListener('mouseenter') mouseover(){
      this.backgroundColor = this.highlihtColor;
  };

  @HostListener('mouseleave') mouseleave(){
      this.backgroundColor = this.defaultColor;
  };

  @HostBinding('style.backgroundColor') get setColor() {
      return this.backgroundColor;
  }

  @Input() defaultColor = 'white';
  @Input('highlight') highlihtColor = 'green';

  private backgroundColor: string;

  constructor() {
      //this.elementRef.nativeElement.style.backgroundColor = 'green';
      //this.renderer.setElementStyle(this.elementRef.nativeElement, 'backgroundColor', 'green');
  }

  ngOnInit() {
      this.backgroundColor = this.defaultColor;
  }
}

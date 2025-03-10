import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el:ElementRef, private renderer:Renderer2){}
  @HostListener('mouseenter') public onMouseEnter():void{
    this.renderer.setStyle(this.el.nativeElement, 'color', 'blue');
    this.renderer.setStyle(this.el.nativeElement, 'fontSize','50px');

  }
  @HostListener('mouseleave') public onMouseLeave():void{
    this.renderer.removeStyle(this.el.nativeElement, 'color');
    this.renderer.removeStyle(this.el.nativeElement, 'fontSize');
  }



}

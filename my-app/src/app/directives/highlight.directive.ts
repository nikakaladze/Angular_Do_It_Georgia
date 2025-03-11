import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef,private renderer:Renderer2) { }
  @Input() highlightColor:string;
  @Input() defaultColor:string;

  @HostListener('mouseenter') public onMouseEnter():void{
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor',this.highlightColor);
    this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
    this.renderer.setStyle(this.el.nativeElement, 'fontSize', '30px');
    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer');
  }

  @HostListener('mouseleave') public onMouseLeave():void{
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor',this.defaultColor);
    this.renderer.removeStyle(this.el.nativeElement, 'color');
    this.renderer.removeStyle(this.el.nativeElement, 'fontSize');
  }
}

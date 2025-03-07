import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
// @Input("appHighlight") highlightColor:string = 'yellow';
@Input() defaultColor:string;
@Input() highlightColor: string;



  constructor(private el:ElementRef, private render:Renderer2) {};

  @HostListener('mouseenter') public onMouseEnter():void{
    this.render.setStyle(this.el.nativeElement,'backgroundColor',this.highlightColor);
     
  }
  @HostListener('mouseleave') public mouseleave():void{
    this.render.setStyle(this.el.nativeElement,'backgroundColor',this.defaultColor)

  }

}

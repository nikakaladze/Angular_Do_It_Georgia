import {
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent implements AfterContentInit {
  @ContentChild('projectedContent') contentElement: ElementRef;
  ngAfterContentInit() {
    console.log('projected content', this.contentElement.nativeElement.textContent);
    this.contentElement.nativeElement.style.color = 'violet';
  }
}

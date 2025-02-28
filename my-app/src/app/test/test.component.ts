import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  @Input() childMessage: string = '';
  @Output() messageEvent: EventEmitter<string> = new EventEmitter<string>();

  public sendMessage(): void {
    this.messageEvent.emit('hello from child');

  };

  Count(): void {
    this.counter++
  }
  counter: number = 0;


  isDisabled: boolean = true;

  fmessage: string = "hello"
}

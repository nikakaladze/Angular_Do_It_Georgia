import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  Count():void{
    this.counter++
  }
    counter:number = 0;


  isDisabled: boolean = true;

  fmessage:string="hello"
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from "./test/test.component";
import { ChildComponent } from './child/child.component';
import { UserProfileComponent } from "./user-profile/user-profile.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TestComponent, ChildComponent, UserProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
  parentMessage:string = 'hello from Parent';
message:string = '';


public recieveMessage(message:string):void{
  this.message = message;
}




}

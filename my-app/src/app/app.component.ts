import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
<<<<<<< HEAD
import { TestComponent } from "./test/test.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TestComponent],
=======

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
>>>>>>> 145389a594d5fc18450c90fb015da3ca8cf40d2e
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
<<<<<<< HEAD
  message:string = 'hello world from Angular';

=======
  title = 'my-app';
>>>>>>> 145389a594d5fc18450c90fb015da3ca8cf40d2e
}

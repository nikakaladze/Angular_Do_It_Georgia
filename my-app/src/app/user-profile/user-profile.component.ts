import { Component } from '@angular/core';
import {HighlightDirective} from "../directives/highlight.directive";

@Component({
  selector: 'app-user-profile',
  imports: [HighlightDirective],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {

  protected readonly HighlightDirective = HighlightDirective;
}

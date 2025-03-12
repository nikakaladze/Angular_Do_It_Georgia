import { Component } from '@angular/core';
import {HighlightDirective} from "../directives/highlight.directive";
import {DatePipe, NgForOf, NgIf, NgSwitch, NgSwitchCase} from '@angular/common';
import {RepeatDirective} from '../directives/repeat.directive';
import {FilterItemsPipe} from '../pipes/filter-items.pipe';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  imports: [HighlightDirective, NgIf, NgForOf, NgSwitch, NgSwitchCase, RepeatDirective, DatePipe, FilterItemsPipe, FormsModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
isLoggedIn: boolean = false;
useRole :string = "IsSecurity";
today: Date = new Date();
filterItems: string = '';

items:string[] = ['banana','apple','orange','pinneaple'];

players  = [
  {
    "id": 26,
    "firstName": "John",
    "lastName": "Terry",
    "position": "Defender",
  },
  {
    "id": 12,
    "firstName": "John",
    "lastName": "Obi Mikel",
    "position": "CMD",
  },
  {
    "id": 8,
    "firstName": "Frank",
    "lastName": "Lampard",
    "position": "CM",
  },
  {
    "id": 11,
    "firstName": "Didier",
    "lastName": "Drogba",
    "position": "CenterForward",

  }
]
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from '../directives/highlight.directive';

@Component({
  selector: 'app-user-profile',
  imports: [FormsModule,CommonModule,HighlightDirective],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
username:string = 'nika kaladze';
isActive:boolean = true  ;
isRed:boolean = true;
isBlue:boolean = false;




}

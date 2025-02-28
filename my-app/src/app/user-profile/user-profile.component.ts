import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnChanges{
  @Input() userName: string | undefined;
  @Input() price:number | undefined;
  displayPrice: string | undefined;


  ngOnChanges(changes: SimpleChanges): void {
    if(changes['userName']){
      const prevName = changes['userName'].previousValue;
      const currentName =changes['userName'].currentValue;
      console.log(`username changed from ${prevName} to ${currentName}`);

    }

    if(changes['price']){
      this.displayPrice = `$${changes['price'].currentValue.toFixed(2)}`
    }
  }

}

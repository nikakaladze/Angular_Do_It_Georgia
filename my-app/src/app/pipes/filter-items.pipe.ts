import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterItems',
  pure:false,
})
export class FilterItemsPipe implements PipeTransform {

 transform(value: string[], filterItems:string): string[] {
   return value.filter((item:string) => item.includes(filterItems.toLowerCase()))
 }

}


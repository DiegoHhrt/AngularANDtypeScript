import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/numbers.interface';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(value: Hero[], orderBy:string = 'none'): Hero[] {
    
    switch (orderBy) {
      case 'name':
        return value.sort((a,b)=>(a.name>b.name)?1:-1);
      case 'flight':
        return value.sort((a,b)=>(a.flights>b.flights)?-1:1);
      case 'color':
        return value.sort((a,b)=>(a.color>b.color)?1:-1);
      default:
        return value;
    }

  //   if(orderBy === 'none')
  //   {
  //     return value;
  //   }
  //   else
  //   {
  //     value = value.sort((a,b)=>(a.name>b.name)?1:-1);
  //   }

  //   return value;
  }

}

import { Component, OnInit } from '@angular/core';
import { Color, Hero } from '../../interfaces/numbers.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent{

  orderBy: string = '';

  toggler:boolean=false;
  heroes: Hero[] = [
    {
      name: 'Ironman',
      flights: true,
      color: Color.red
    },
    {
      name: 'Batman',
      flights: false,
      color: Color.black
    },
    {
      name: 'Flash',
      flights: false,
      color: Color.red
    },
    {
      name: 'Thor',
      flights: true,
      color: Color.blue
    }
  ]
  toggle(){
    (this.toggler)?this.toggler=false:this.toggler=true;
  }

  changeOrder(value:string)
  {
    this.orderBy=value;
  }
}

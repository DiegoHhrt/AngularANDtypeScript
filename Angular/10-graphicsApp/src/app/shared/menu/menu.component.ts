import { Component, OnInit } from '@angular/core';

interface MenuItem
{
  route: string;
  text: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
      li{
        cursor: pointer;
      }
    `
  ]
})
export class MenuComponent{

  menu: MenuItem [] = [
    {route: '/graphics/bars', text: 'Bars'},
    {route: '/graphics/double-bars', text: 'Double Bars'},
    {route: '/graphics/donut', text: 'Donut'},
    {route: '/graphics/donut-http', text: 'Http Donut'},
  ]

}

import { Component} from '@angular/core';

interface MenuItem {
  text: string;
  route: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [
    `
      li {
        cursor:pointer;
      }
    `
  ]
})
export class SidemenuComponent{

  templateMenu: MenuItem[] = [
    {
      text:'Basics',
      route: './template/basics'
    },
    {
      text:'Dynamics',
      route: './template/dinamics'
    },
    {
      text:'Switches',
      route: './template/switches'
    }
  ]

  reactiveMenu: MenuItem[] = [
    {
      text:'Basics',
      route: './reactive/basics'
    },
    {
      text:'Dynamics',
      route: './reactive/dinamics'
    },
    {
      text:'Switches',
      route: './reactive/switches'
    }
  ]

}

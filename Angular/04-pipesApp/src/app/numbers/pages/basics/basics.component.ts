import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent {

  lowerName: string='diego';
  upperName: string='DIEGO';
  fullName:string='dIEgo hernÁndeZ'

  date:Date=new Date();
}

import { Component, OnInit } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {

  heroes: string[]=['Batman', 'Ironman', 'Flash', 'Master Chief'];
  gone: string = '';
  delete(){
    this.gone = this.heroes.pop() || 'No heroes remaining';
  }
}

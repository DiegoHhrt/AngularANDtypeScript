import { Component, OnInit } from '@angular/core';
import { Character } from '../Interfaces/aot.interface';
import { AotService } from '../services/aot.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent{

  nuevo : Character = {
    name: 'Eren',
    faction: 'Jaegerists',
  }

  // addNewCharacter ( arg:Character )
  // {
  //   this.characters.push(arg);
  //   console.log(arg);
  // }

  constructor (){}

}

import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Character } from '../Interfaces/aot.interface';
import { AotService } from '../services/aot.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
})
export class AddComponent{

  @Input() nuevo: Character = {
    name: "",
    faction: ""
  }

  constructor (private aotService:AotService){}

  //@Output() onNewCharacter: EventEmitter<Character> = new EventEmitter();
  add(  ){
    if (this.nuevo.name.trim().length===0||this.nuevo.faction.trim().length===0)
    {
      return;
    }
    else
    {
      //this.onNewCharacter.emit(this.nuevo);
      this.aotService.addNewCharacter(this.nuevo);
      this.nuevo={
        name: "",
        faction: ""
      }
    }
    console.log(this.nuevo);
  }


}

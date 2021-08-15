import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../Interfaces/aot.interface';
import { AotService } from '../services/aot.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
})
export class CharactersComponent{
 // @Input('data') characters: Character []=[];

  get characters(){
    return this.aotService.characters;
  }

  constructor (private aotService:AotService){

  }
}

import { Component} from '@angular/core';
import { AotService } from '../services/aot.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
})
export class CharactersComponent{

  get characters(){
    return this.aotService.characters;
  }

  constructor (private aotService:AotService){

  }
}

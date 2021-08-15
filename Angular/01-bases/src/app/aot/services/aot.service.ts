import { Injectable } from "@angular/core";
import { Character } from '../Interfaces/aot.interface';


@Injectable()

export class AotService{
    private _characters: Character[] = [
        {
          name: 'Mikasa',
          faction: 'Legion'
        },
        {
          name: 'Reiner',
          faction: 'Marley'
        }
      ];

    get characters (): Character[]{
        return [...this._characters];
    }
    constructor (){}

    addNewCharacter ( arg:Character )
    {
      this._characters.push(arg);
    }

}
import { Component} from '@angular/core';

interface Person {
  name: string;
  favs: Favorite[] 
}

interface Favorite {
  id: number;
  name: string; 
}

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styles: [
  ]
})
export class DynamicsComponent {

  newGame: string = '';

  person: Person = {
    name: 'Sum Name',
    favs: [
      {id: 1, name: 'Halo Infinite'},
      {id: 2, name: 'Batman Arkham Knight'},
    ]
  }

  save()
  {
    console.log('posted')
  }
  delete(index:number)
  {
    this.person.favs.splice(index, 1);
  }
  add()
  {
    const newFav: Favorite = {
      id: this.person.favs.length + 1,
      name: this.newGame
    }

    this.person.favs.push({... newFav});
    this.newGame = '';
  }
}

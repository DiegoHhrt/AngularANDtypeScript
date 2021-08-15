import { Component } from "@angular/core";

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html'
})

export class HeroComponent{
    name: string = 'Ironman';
    age:number = 49;

    get capitalizedName(): string{
        return this.name.toUpperCase();
    }

    obtainName():string{
        return `${ this.name} - ${ this.age } `
    }
    change(){
        this.name='Spiderman';
    }
    changeAge(){
        this.age=Math.round(Math.random()*30)+19;
    }
}
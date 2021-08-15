import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    template:`
        <h1>{{ title }}</h1>
        <h2>The base is <strong>{{base}}</strong></h2>

        <button (click)="cumulate(base);"> +{{base}} </button>
        <button (click)="cumulate(-base);"> -{{base}} </button>

        <br><br>
        <span>{{ num }}</span>
    
    `
})

export class CounterComponent {
    public title: string = 'Contador app';
    num: number = 117;
    base: number = 11;
  
    cumulate (value:number){
      this.num+=value;
    }
}
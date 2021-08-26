import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-not-commons',
  templateUrl: './not-commons.component.html',
  styles: [
  ]
})
export class NotCommonsComponent{

  name:string='Daniel';
  gender: string = 'masc';
  counter:number=0;
  message:string='Delete one';

  invitationMap={
    'masc': 'he',
    'fem': 'she',
    'o':'they'
  }
  invitationMap2={
    'masc': 'his',
    'fem': 'her',
    'o':'their'
  }
  invitationMap3={
    'masc': 'is',
    'fem': 'is',
    'o':'are'
  }
  changeClient()
  {
    if(this.counter<2)
    {
      this.counter++;
      if(this.counter==1)
      {
        this.name='Sarah';
        this.gender='fem'
      }
      else if(this.counter==2)
      {
        this.name='Jaden';
        this.gender='o'
      }
    } 
    else
    {
      this.counter=0;
      this.name='Daniel';
      this.gender='masc'
    }
  }


  clients:string[]=['Mikasa', 'Armin', 'Ereh', 'Hange', 'Levi', 'Erwin'];
  clientMap={
    '=0': 'we have no clients waiting',
    '=1': 'we have one client waiting',
    'other': 'we have # clients waiting'
  }
  deleteClient()
  {
    if(this.clients.length>0)
    {
      this.message='Delete one'
      // this.clients.pop();
      this.clients.shift();
    }
    // else
    // {
    //   this.clients=['Mikasa', 'Armin', 'Ereh', 'Hange', 'Levi', 'Erwin']
    // }
  }


  people={
    name: 'Diego',
    age:17,
    adress:'TOP SECRET'
  }


  heroes=[
    {
      name: 'Ironman',
      flies: true 
    },
    {
      name: 'Black Widow',
      flies: false
    },
    {
      name: 'Scarlet Witch',
      flies: true 
    },
  ]



  myObservable=interval(1000);

  promiseValue=new Promise((r,e)=>{
    setTimeout(()=>{
      r('End of promise');
    }, 3500);
  })

}

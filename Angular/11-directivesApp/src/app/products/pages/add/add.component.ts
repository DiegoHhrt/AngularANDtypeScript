import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [
  ]
})
export class AddComponent{

  color: string = 'red';
  text: string = 'Here we have text';

  myForm:FormGroup = this.fb.group({
    name: ['', [Validators.required]]
  })

  constructor(private fb:FormBuilder) { }

  hasError( field: string ):boolean
  {
    return this.myForm.get(field)?.invalid || false;
  }
  changeColor()
  {
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.color = color;
  }
  changeText()
  {
    this.text=Math.random().toString();
  }
}

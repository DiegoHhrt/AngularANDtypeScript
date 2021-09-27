import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {

  @ViewChild('myForm')myForm!:NgForm;

  initForm = {
    product: 'Ojo',
    price: 1,
    stock: 2
  }
  
  constructor() { }

  ngOnInit(): void {
  }

  validName():boolean
  {
    return this.myForm?.controls.Product?.invalid && this.myForm?.controls.Product?.touched
  }
  validPrice():boolean
  {
    return (this.myForm?.controls.Price?.touched 
    && this.myForm?.controls.Price?.value < 0)
    || (this.myForm?.controls.Price?.invalid
      && this.myForm?.controls.Price?.touched)
    
  }

  // save(myform:NgForm)
  save()
  {
    console.log(this.myForm);
    this.myForm.resetForm({
      Price: 0,
      Stock: 0
    });
  }

}

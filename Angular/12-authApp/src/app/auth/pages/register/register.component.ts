import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent {

  myForm:FormGroup=this.fb.group({
    name: ['Holaaa', [Validators.required]],
    email: ['test1@test.com', [Validators.required, Validators.email]],
    password: ['111111111', [Validators.required, Validators.minLength(6)]]
  })

  constructor(private fb:FormBuilder) { }

  register()
  {
    console.log(this.myForm.value)
  }
}

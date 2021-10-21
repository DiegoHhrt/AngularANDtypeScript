import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  myForm:FormGroup=this.fb.group({
    email: ['test1@test.com', [Validators.required, Validators.email]],
    password: ['111111111', [Validators.required, Validators.minLength(6)]]
  })

  constructor(private fb:FormBuilder) { }

  login()
  {
    console.log(this.myForm.value)
    console.log(this.myForm.valid)
  }
}

import { getParseErrors } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
//import { emailPattern, invalidUsername, namePattern } from 'src/app/shared/validator/validations';
import { ValidatorService } from 'src/app/shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.vs.namePattern)]],
    email: ['', [Validators.required, Validators.pattern(this.vs.emailPattern)], [this.emailValidation]],
    username: ['', [Validators.required, this.vs.invalidUsername]],
    password: ['', [Validators.required, Validators.minLength(6)], []],
    confirmPassword: ['', [Validators.required, ]]
  }, {
    validators: [this.vs.equalFields('password', 'confirmPassword')]
  })
  constructor( private fb:FormBuilder, private vs:ValidatorService, private emailValidation:EmailValidatorService) { }

  get emailErrormsg():string
  {
    const errors = this.myForm.get('email')?.errors;
    if(errors?.required)
    {
      return 'Email is obligatory';
    }
    else if (errors?.pattern)
    {
      return 'You have to use a valid email';
    }
    else if (errors?.takenEmail)
    {
      return 'This email is already on use';
    }
    return '';
  }

  ngOnInit(): void {
    this.myForm.reset({
      name: "Mikasa Ackerman",
      email: "test1@test.com",
      username: "DiegOh"
    })
  }

  validField(field:string)
  {
    return this.myForm.get(field)?.invalid && this.myForm.get(field)?.touched;
  }

  // requiredEmail()
  // {
  //   return this.myForm.get('email')?.errors?.required && this.myForm.get('email')?.touched;
  // }
  // requiredFormat()
  // {
  //   return this.myForm.get('email')?.errors?.pattern && this.myForm.get('email')?.touched;
  // }
  // takenEmail()
  // {
  //   return this.myForm.get('email')?.errors?.takenEmail && this.myForm.get('email')?.touched;
  // }

  submitForm()
  {
    this.myForm.markAllAsTouched();
    console.log(this.myForm.value)
  }


}

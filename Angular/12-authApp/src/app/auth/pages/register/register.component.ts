import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from "sweetalert2";

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

  constructor(private fb:FormBuilder,
              private router:Router,
              private authService:AuthService) { }

  register()
  {
    const {name, email, password} = this.myForm.value;
    this.authService.register(name, email, password)
      .subscribe( ok => {
        if(ok===true)
        {
          this.router.navigateByUrl('/dashboard')
        }
        else
        {
          Swal.fire('Error', ok, 'error')
        }
      });
  }
}

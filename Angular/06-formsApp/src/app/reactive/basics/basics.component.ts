import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {

  // myForm: FormGroup = new FormGroup ({
  //   name: new FormControl('Ojoooooo'),
  //   price: new FormControl(117),
  //   stock: new FormControl(777)
  // })

  myForm: FormGroup = this.fb.group({
    name: [ , [Validators.required, Validators.minLength(3)]],
    price: [ , [Validators.required, Validators.min(0)]],
    stock: [ , [Validators.required, Validators.min(0)]]
  })

  constructor(private fb:FormBuilder) { 

  }

  ngOnInit()
  {
    this.myForm.setValue({
      name: 'MmMmMmmm',
      price: 2121212,
      stock: 1
    })
  }

  validField(field:string)
  {
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched
  }
  
  save()
  {
    if(!this.myForm.invalid)
    {
      console.log(this.myForm.value);
      this.myForm.reset();
    }
    else
    {
      this.myForm.markAllAsTouched();
    }
  }

}

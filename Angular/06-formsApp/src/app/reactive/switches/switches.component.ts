import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  
  
  myForm:FormGroup = this.fb.group({
    gender: ['M', Validators.required],
    notif: [true, Validators.required],
    conditions: [false,Validators.requiredTrue]
  })

  ngOnInit()
  {
    this.myForm.reset({... this.person, conditions:false});

    //Verificar los cambios del formulario en vivo
    /*this.myForm.valueChanges.subscribe( ({conditions, ...rest}) => {
      //delete form.conditions;
      this.person = rest;
    })*/
  }

  person = {
    gender: 'O',
    notif: true
  }

  save()
  {
    const formValue ={ ... this.myForm.value };
    delete formValue.conditions;

    this.person=formValue;
  }
}

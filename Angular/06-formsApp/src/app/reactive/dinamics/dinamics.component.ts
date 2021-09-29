import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamics',
  templateUrl: './dinamics.component.html',
  styles: [
  ]
})
export class DinamicsComponent {

  constructor(private fb:FormBuilder) { }

  myForm: FormGroup = this.fb.group({
    name: [ , [Validators.required, Validators.minLength(3)]],
    favs: this.fb.array([], Validators.required)
  })

  newFav:FormControl = this.fb.control('', Validators.required);

  get favsArr ()
  {
    return this.myForm.get('favs') as FormArray;
  }

  validField(field:string)
  {
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched
  }

  delete(index:number)
  {
    this.favsArr.removeAt(index);
  }

  save()
  {
    if(!this.myForm.invalid)
    {
      console.log(this.myForm.value)
    }
    else
    {
      this.myForm.markAllAsTouched();
    }
  }
  addFav()
  {
    if(!this.newFav.invalid)
    {
      this.favsArr.push(this.fb.control(this.newFav.value, Validators.required));
      this.newFav.reset();
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styles: [
  ]
})
export class SelectorComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    region: ['', [Validators.required]]
  })

  constructor( private fb:FormBuilder ) { }

  ngOnInit(): void {
  }

  save()
  {
    
  }
}

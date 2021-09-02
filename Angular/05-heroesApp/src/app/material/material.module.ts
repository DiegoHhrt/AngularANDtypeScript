import { NgModule } from '@angular/core';

//Angular material
import {MatSidenavModule} from '@angular/material/sidenav'; 
@NgModule({
  imports:[
    MatSidenavModule
  ],
  exports:[
    MatSidenavModule
  ]
})
export class MaterialModule { }

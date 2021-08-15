import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { CharactersComponent } from './characters/characters.component';
import { AddComponent } from './add/add.component';
import { AotService } from './services/aot.service';



@NgModule({
  declarations: [
    MainPageComponent,
    CharactersComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    MainPageComponent
  ],
  providers: [
    AotService
  ]
})
export class AotModule { }

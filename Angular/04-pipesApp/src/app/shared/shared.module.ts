import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { PrimeNgStylesModule } from '../prime-ng-styles/prime-ng-styles.module';



@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    PrimeNgStylesModule
  ],
  exports:[
    MenuComponent
  ]
})
export class SharedModule { }

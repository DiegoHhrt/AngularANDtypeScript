import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumsComponent } from './pages/nums/nums.component';
import { NotCommonsComponent } from './pages/not-commons/not-commons.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { OrderComponent } from './pages/order/order.component';
import { PrimeNgStylesModule } from '../prime-ng-styles/prime-ng-styles.module';



@NgModule({
  declarations: [
    NumsComponent,
    NotCommonsComponent,
    BasicsComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    PrimeNgStylesModule
  ],
  exports: [
    NumsComponent,
    NotCommonsComponent,
    BasicsComponent,
    OrderComponent
  ]
})
export class NumbersModule { }

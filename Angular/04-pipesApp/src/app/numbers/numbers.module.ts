import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumsComponent } from './pages/nums/nums.component';
import { NotCommonsComponent } from './pages/not-commons/not-commons.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { OrderComponent } from './pages/order/order.component';
import { PrimeNgStylesModule } from '../prime-ng-styles/prime-ng-styles.module';
import { MayusPipe } from './pipes/uppercase.pipe';
import { FlightPipe } from './pipes/flight.pipe';
import { OrderPipe } from './pipes/order.pipe';



@NgModule({
  declarations: [
    NumsComponent,
    NotCommonsComponent,
    BasicsComponent,
    OrderComponent,
    MayusPipe,
    FlightPipe,
    OrderPipe
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

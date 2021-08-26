import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BasicsComponent } from './numbers/pages/basics/basics.component';
import { NumsComponent } from './numbers/pages/nums/nums.component';
import { NotCommonsComponent } from './numbers/pages/not-commons/not-commons.component';
import { OrderComponent } from './numbers/pages/order/order.component';

const routes: Routes = [
  {
    path: '',
    component: BasicsComponent,
    pathMatch: 'full'
  },
  {
    path: 'numbers',
    component: NumsComponent
  },
  {
    path: 'not-commons',
    component: NotCommonsComponent
  },
  {
    path: 'order',
    component: OrderComponent
  },
  {
    path: '**',
    redirectTo: ''
  },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }

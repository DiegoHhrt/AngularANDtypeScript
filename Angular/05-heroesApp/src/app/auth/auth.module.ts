//Native Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Local Modules
import { AuthRoutingModule } from './auth-routing.module';

//My components
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }

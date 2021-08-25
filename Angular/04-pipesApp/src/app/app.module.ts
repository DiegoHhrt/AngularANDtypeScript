import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//Custom module
import { PrimeNgStylesModule } from './prime-ng-styles/prime-ng-styles.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PrimeNgStylesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

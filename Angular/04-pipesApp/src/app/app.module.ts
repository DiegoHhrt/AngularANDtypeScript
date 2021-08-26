import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { NumbersModule } from './numbers/numbers.module';

//Custom module
import { SharedModule } from './shared/shared.module';

//Change Locale 
import localeEs from "@angular/common/locales/es-MX";
import localeFr from "@angular/common/locales/fr";
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEs);
registerLocaleData(localeFr);
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRouterModule,
    BrowserModule,
    SharedModule,
    NumbersModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: LOCALE_ID, 
      useValue: 'es-Mx'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

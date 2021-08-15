import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { CounterComponent } from './counter/contador/counter.component';
import { CounterModule } from './counter/counters.module';
import { AotModule } from './aot/aot.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    CounterModule,
    AotModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// Native Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from "@angular/flex-layout";
//My modules
import { HeroesRoutingModule } from './heroes-routing.module';
import { MaterialModule } from '../material/material.module';

//My components
import { AddComponent } from './pages/add/add.component';
import { SearchComponent } from './pages/search/search.component';
import { HeroComponent } from './pages/hero/hero.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { HeroImagePipe } from './pipes/hero-image.pipe';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddComponent,
    SearchComponent,
    HeroComponent,
    HomeComponent,
    ListComponent,
    HeroCardComponent,
    HeroImagePipe
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule
  ]
})
export class HeroesModule { }

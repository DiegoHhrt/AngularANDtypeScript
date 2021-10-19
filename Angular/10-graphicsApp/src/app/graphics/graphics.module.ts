import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraphicsRoutingModule } from './graphics-routing.module';
import { ChartsModule } from 'ng2-charts';

import { BarsComponent } from './pages/bars/bars.component';
import { BarsDoubleComponent } from './pages/bars-double/bars-double.component';
import { DonutComponent } from './pages/donut/donut.component';
import { DonutHttpComponent } from './pages/donut-http/donut-http.component';
import { BarGraphicComponent } from './components/bar-graphic/bar-graphic.component';


@NgModule({
  declarations: [
    BarsComponent,
    BarsDoubleComponent,
    DonutComponent,
    DonutHttpComponent,
    BarGraphicComponent
  ],
  imports: [
    CommonModule,
    GraphicsRoutingModule,
    ChartsModule
  ]
})
export class GraphicsModule { }

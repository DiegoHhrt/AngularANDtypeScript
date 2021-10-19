import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styles: [
  ]
})
export class DonutComponent {


  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Other'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100, 200],
  ];
  public doughnutChartType: ChartType = 'doughnut';

  colors: Color[] = [
    {
      backgroundColor: [
        "#FAA17D",
        "#E6737E",
        "#ED7EFA",
        "#9673E6",
        "#85A6FF",
      ]
    }
  ]
}

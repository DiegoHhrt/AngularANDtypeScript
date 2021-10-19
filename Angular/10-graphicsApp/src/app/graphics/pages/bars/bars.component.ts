import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styles: [
  ]
})
export class BarsComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true
  };
  public barChartLabels: Label[] = ['2016', '2017', '2018', '2019', '2020', '2021', '2022'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor: '#FBF70F', hoverBackgroundColor: "#7D3EFA" },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', backgroundColor: '#FAA81B', hoverBackgroundColor: "#40B3FA" },
    { data: [7, 6, 11, 22, 19, 96, 17], label: 'Series C', backgroundColor: '#FF2500', hoverBackgroundColor: "#26FF7D" }
  ];


  constructor() { }

  ngOnInit(): void {
  }

  randomize(): void {
    for(let i = 0; i<3; i++)
    {
      this.barChartData[i].data = [
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
      ];
    }
  }

}

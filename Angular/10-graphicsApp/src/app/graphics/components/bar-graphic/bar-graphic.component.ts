import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-bar-graphic',
  templateUrl: './bar-graphic.component.html',
  styles: [
  ]
})
export class BarGraphicComponent implements OnInit{

  @Input() horizontal: boolean = false;

  
  public barChartOptions: ChartOptions = {
    responsive: true
  };

  @Input () barChartLabels: Label[] = [
    //  '2016', '2017', '2018', '2019', '2020', '2021', '2022'
  
  ];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  @Input() barChartData: ChartDataSets[] = [
    // { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor: '#FBF70F', hoverBackgroundColor: "#7D3EFA" },
    // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', backgroundColor: '#FAA81B', hoverBackgroundColor: "#40B3FA" },
    // { data: [7, 6, 11, 22, 19, 96, 17], label: 'Series C', backgroundColor: '#FF2500', hoverBackgroundColor: "#26FF7D" }
    
  ];


  constructor() { }

  ngOnInit(): void {
    if(this.horizontal)
    {
      this.barChartType="horizontalBar";
    }
  }


}

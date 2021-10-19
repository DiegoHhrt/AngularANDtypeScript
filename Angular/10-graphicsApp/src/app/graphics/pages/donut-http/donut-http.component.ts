import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { GraphicsService } from '../../services/graphics.service';

@Component({
  selector: 'app-donut-http',
  templateUrl: './donut-http.component.html',
  styles: [
  ]
})
export class DonutHttpComponent implements OnInit {

  
  public doughnutChartLabels: Label[] = [
  //  'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Other'
    
  ];
  public doughnutChartData: MultiDataSet = [
    //[350, 450, 100, 200],

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

  constructor( private GraphicsService:GraphicsService ) { }

  ngOnInit(): void {
    // this.GraphicsService.getGraphData()
    // .subscribe( data =>{
    //   const labels= Object.keys(data);
    //   const values = Object.values(data);

    //   this.doughnutChartLabels=labels;
    //   this.doughnutChartData.push(values);
    // })

    this.GraphicsService.getOptimizedData()
      .subscribe(({labels, values}) => {
        this.doughnutChartLabels = labels;
        this.doughnutChartData.push(values);
      })
  }

}

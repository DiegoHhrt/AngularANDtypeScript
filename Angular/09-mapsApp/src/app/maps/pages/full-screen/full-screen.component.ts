import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
 


@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styles: [
    `
      #map {
        width: 100%;
        height: 100%;
      }
    `
  ]
})
export class FullScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  
    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    //         long                  lat
    center: [-99.15671907524755, 19.352319040931334],
    zoom: 16
    });
  
  }

}

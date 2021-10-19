import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styles: [
    `
      .map-container{
        width: 100%;
        height: 100%;
      }
      .list-group{
        position: fixed;
        top: 20px;
        right:20px;
        z-index: 999999;
      }
      li {
        cursor: pointer;
      }
    `
  ]
})
export class MarksComponent implements AfterViewInit {

  @ViewChild('map') divMap!:ElementRef;
  map!: mapboxgl.Map;
  zoomLevel:number=15;
  center: [number, number] = [-99.15671907524755, 19.352319040931334];


  constructor() { }

  ngAfterViewInit(): void {
    this.map = new mapboxgl.Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zoomLevel
    });

    // const markerHtml:HTMLElement = document.createElement('div');
    // markerHtml.innerHTML='ojojojo';

    // // const marker = new mapboxgl.Marker({
    // //   element:markerHtml
    // // })
    // new mapboxgl.Marker()
    //   .setLngLat(this.center)
    //   .addTo(this.map)
  }

  goToMark()
  {

  }

  addMark()
  {
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    const newMarker = new mapboxgl.Marker(
      {
        draggable: true,
        color
      }
    )
    .setLngLat(this.center)
    .addTo(this.map);
  }

}

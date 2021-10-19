import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [
    `
      .map-container{
        width: 100%;
        height: 100%;
      }

      .row{
        background-color: white;
        border-radius: 10px;
        bottom: 50px;
        left: 50px;
        padding: 10px;
        position: fixed;
        z-index: 99999;
        width: 400px;
      }
    `
  ]
})
export class ZoomRangeComponent implements AfterViewInit,  OnDestroy{

  @ViewChild('map') divMap!:ElementRef;
  map!: mapboxgl.Map;
  zoomLevel:number=15;
  center: [number, number] = [-99.15671907524755, 19.352319040931334];
  
  constructor() { }
  ngOnDestroy(): void {
    this.map.off('zoom', ()=>{});
    this.map.off('zoomend', ()=>{});
    this.map.off('move', ()=>{});
  }

  ngAfterViewInit(): void {
    this.map = new mapboxgl.Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      //         long                  lat
      center: this.center,
      zoom: this.zoomLevel
    });
    this.map.on('zoom', (event) => {
      this.zoomLevel = this.map.getZoom();
    });
    this.map.on('zoomend', (event) => {
      if (this.map.getZoom()>18)
      {
        this.map.zoomTo(18)
      }
    });
    this.map.on('move', (event) => {
      const target = event.target;
      const{lng, lat}=target.getCenter();
      this.center = [lng, lat];
    });
  }
  zoomIn()
  {
    this.map.zoomIn();
  }
  zoomOut()
  {
    this.map.zoomOut();
  }
  zoomChanged(value:string)
  {
    this.map.zoomTo(Number(value));
  }

}

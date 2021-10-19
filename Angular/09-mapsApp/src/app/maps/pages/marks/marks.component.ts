import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

interface MarkerColor {
  color: string;
  marker?: mapboxgl.Marker;
  center?: [number,number];
}
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

  marks: MarkerColor[] = []

  constructor() { }

  ngAfterViewInit(): void {
    this.map = new mapboxgl.Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zoomLevel
    });

    this.readMarkers()

    // const markerHtml:HTMLElement = document.createElement('div');
    // markerHtml.innerHTML='ojojojo';

    // // const marker = new mapboxgl.Marker({
    // //   element:markerHtml
    // // })
    // new mapboxgl.Marker()
    //   .setLngLat(this.center)
    //   .addTo(this.map)
  }

  goToMark( center: mapboxgl.Marker)
  {
    this.map.flyTo({
      center: center!.getLngLat(),
      zoom: 16
    })
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

    this.marks.push({
      color,
      marker: newMarker
    });

    this.saveMarkers();
    newMarker.on('dragend', () => {
      this.saveMarkers();
    })
  }

  saveMarkers()
  {
    const lngLatArr: MarkerColor[] = []
    this.marks.forEach(m => {
      const color = m.color;
      const {lng, lat} = m.marker!.getLngLat();

      lngLatArr.push({
        color: m.color,
        center: [lng, lat]
      });
    });

    localStorage.setItem('markers', JSON.stringify(lngLatArr))
  }

  readMarkers()
  {
    if(localStorage.getItem('markers'))
    {
      const lngLatArr: MarkerColor[] = JSON.parse(localStorage.getItem('markers')!);
      
      lngLatArr.forEach(m => {
        const newMarker = new mapboxgl.Marker({
          color: m.color,
          draggable: true
        })
        .setLngLat(m.center!)
        .addTo(this.map)
        this.marks.push({
          marker: newMarker,
          color: m.color
        })
        newMarker.on('dragend', () => {
          this.saveMarkers();
        })
      });

    }
  }

  deleteMarker( i:number )
  {
    this.marks[i].marker?.remove();
    this.marks.splice(i,1);
    this.saveMarkers();
  }

}

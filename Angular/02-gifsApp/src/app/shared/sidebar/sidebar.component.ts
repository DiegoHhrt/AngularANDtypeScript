import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gfs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent{

  constructor(private gifsService:GifsService){};
  
  get history (){
    return this.gifsService.history;
  }

  search(term:string)
  {
    this.gifsService.searchGif(term);
  }
}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../../gfs/services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  @ViewChild('txtSearch') txtSearch!:ElementRef<HTMLInputElement>;

  constructor (private gifsService:GifsService) {}
  search ()
  {
    const searchedItem = this.txtSearch.nativeElement.value;
    
    if(searchedItem.trim().length!==0)
    {
      this.gifsService.searchGif(searchedItem);
  
      this.txtSearch.nativeElement.value='';
    }

  }

}

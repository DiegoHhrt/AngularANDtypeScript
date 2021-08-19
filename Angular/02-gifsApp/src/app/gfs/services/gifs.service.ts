import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { SearchGifResponse, Gif } from '../../gifs/interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _history: string[] =[];
  private apiKey: string = 'BKq7DWjJUe6h8yqBDwrg7DB8rMs4KlhO';
  public results: Gif[]=[];
  get history () {
    //this._history=this._history.splice(0,10);
    return [... this._history]
  }

  constructor ( private http:HttpClient) {

  }

  searchGif(query:string){
    query=query.trim().toLowerCase();
    if(query.trim().length!=0)
    {
      if( !this._history.includes(query))
      {
        this._history.unshift(query);
        this._history=this._history.splice(0,10);
      }
    }
    
    this.http.get<SearchGifResponse>(`https://api.giphy.com/v1/gifs/search?api_key=BKq7DWjJUe6h8yqBDwrg7DB8rMs4KlhO&q=${query}&limit=15`)
    .subscribe( (response:SearchGifResponse) => {
      this.results=response.data;
    })

  }
}

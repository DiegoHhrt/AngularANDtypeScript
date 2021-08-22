import { Component} from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent{

  constructor(private countryService:CountryService){};

  term:string = '';
  havingError: boolean=false;
  countries:Country[]=[];
  search(term:string)
  {
    this.havingError=false;
    this.term=term;
    this.countryService.searchCountry(this.term)
    .subscribe((countries)=>{
      this.countries=countries;
    }, (err)=>{
      this.havingError=true;
      this.countries=[];
    });
  }

  suggest(term:string)
  {
    this.havingError=false;
  }
}

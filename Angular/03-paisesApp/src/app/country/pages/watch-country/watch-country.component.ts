import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/country.interface';
@Component({
  selector: 'app-watch-country',
  templateUrl: './watch-country.component.html',
  styles: [
  ]
})
export class WatchCountryComponent implements OnInit {

  constructor(
    private activatedRoute:ActivatedRoute,
    private countryService: CountryService
    ) { }


  country!:Country;  

  ngOnInit(): void {
    // this.activatedRoute.params
    // .subscribe( ({id})=>{
    //   this.countryService.getCountryCode(id)
    //   .subscribe( country => {

    //   });
    // })
    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.countryService.getCountryCode(id)), 
      tap()
    )
    .subscribe( country => {
      this.country=country;
    })
  }

}

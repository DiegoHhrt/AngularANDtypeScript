import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountriesService } from '../../services/countries.service';
import { CountrySmall } from '../../interfaces/countries.interface';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styles: [
  ]
})
export class SelectorComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    region: ['', [Validators.required]],
    country: ['', [Validators.required]],
    frontier: ['', [Validators.required]]
    //frontier: [{value: '', disabled:true}, [Validators.required]]
  })

  regions: string[] = [];
  countries: CountrySmall[] =[];
  // frontiers: string[]=[];
  frontiers: CountrySmall[]=[];

  loading: boolean = false;

  constructor( private fb:FormBuilder, private countriesService:CountriesService ) { }

  ngOnInit(): void {
    this.regions=this.countriesService.regions;

  //   this.myForm.get('region')?.valueChanges
  //   .subscribe(region=>{
  //     this.countriesService.getCountryByRegion(region)
  //     .subscribe(countries =>{
  //       this.countries=countries;
  //     })
  // })

    this.myForm.get('region')?.valueChanges
      .pipe(
        tap( ( _ ) => {
          this.myForm.get('country')?.reset('');
          this.loading=true;
          //this.myForm.get('frontier')?.disable();
        }),
        switchMap( region => this.countriesService.getCountryByRegion(region))
      )
      .subscribe(countries=>{
        this.countries=countries;
        this.loading=false;        
      })

      this.myForm.get('country')?.valueChanges
      .pipe(
        tap(()=>{
          this.myForm.get('frontier')?.reset('');
          this.loading=true;
          //this.myForm.get('frontier')?.enable();
        }),
        switchMap( code => this.countriesService.getCountryByAlpha(code) ),
        switchMap(country => this.countriesService.getCountriesByCode(country?.borders!))
      )
      .subscribe(countries=>{
        //this.frontiers=country?.borders || [];
        this.frontiers=countries;
        this.loading=false;
      })
  }

  save()
  {
    
  }
}

import { ICountryCity } from './countrycity';
import { CountrycityService } from './countrycity.service';
import { IWeather } from './weather';
import { WeatherService } from './weather.service';
import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html'
})
export class AppComponent  {
  pageTitle: string = 'Weather Report';
  weatherModel: IWeather;
  countryCityModel: ICountryCity[];
  country:ICountryCity;
  errorMessage: string;
  @Input() cityName: string ='';
  selectedValue: string ='Melbourne';
  
  
  constructor(private _countryCityService: CountrycityService,private _weatherService : WeatherService) {
    }
  
  onSubmit(): void {
   this._countryCityService.getCountryCity(this.cityName)
                .subscribe(
           countries => this.countryCityModel = countries,
            error => this.errorMessage = error
         );
    }
  
  onChangeObj(name: string): void {
    console.log("in weather change",this.selectedValue);
    this._weatherService.getWeatherData(this.cityName)
                .subscribe(
           weather => this.weatherModel = weather,
            error => this.errorMessage = error
         );
  }
  
  /*onSubmit() : void {
  
  this.countryCityModel = this.route.paramMap
              .switchMap((params: ParamMap) => {
                    // (+) before `params.get()` turns the string into a number
                    return this._countryCityService.getCountryCity(this.cityName);
          });
  }*/
  
}

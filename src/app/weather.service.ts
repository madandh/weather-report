import { IWeather } from './weather';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
@Injectable()
export class WeatherService {

private _weatherByCityUrl = 'http://localhost:8080/getWeatherByCity?cityName=';
  
  constructor(private _http: HttpClient) { }
  
  
  
  getWeatherData(cityName: string): Observable<IWeather>  {
     return this._http.get<IWeather>(this._weatherByCityUrl + cityName)
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
  private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if (err.error instanceof Error) {
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return Observable.throw(errorMessage);
    }

}

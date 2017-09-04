import { ICountryCity } from './countrycity';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
@Injectable()
export class CountrycityService {
  private _cityUrl = 'http://localhost:8080/getCityList?cityQueryText=';

  constructor(private _http: HttpClient) { }
  
   getCountryCity(cityName: string): Observable<ICountryCity[]>  {
     return this._http.get<ICountryCity[]>(this._cityUrl + cityName)
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
  
  private extractData(res: Response) {
       if (res.status < 200 || res.status >= 300) {
             throw new Error('Bad response status: ' + res.status);
           }
       let body = res.json();
       return (body.data || []) as ICountryCity[];
    }

}

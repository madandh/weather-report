/**
 * New typescript file
 */
import { ICountryCity } from './countrycity';
export interface IWeather {
   icountryCity: Array<ICountryCity>;
   updatedTime: string;
   weather: string;
   temprature: string;
   wind: string;
}


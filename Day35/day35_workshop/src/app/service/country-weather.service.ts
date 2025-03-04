import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { apiKey, apiUrl } from '../model/country.model';
import { CountryDetails } from '../model/countrydetails.model';

@Injectable({
  providedIn: 'root'
})
export class CountryWeatherService {

  constructor(private httpClient:HttpClient) { }
  
  getCountryWeather(country:string):Observable<any>{
    var queryParams:HttpParams = new HttpParams().set('q',country).set('appid',apiKey)
    return this.httpClient.get(apiUrl, {params : queryParams})
  }
}

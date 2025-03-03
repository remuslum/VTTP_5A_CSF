import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../env/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient:HttpClient) { }

  getCountryInfo(countryName:string):Observable<any> {
    const queryParams:HttpParams = new HttpParams().set("q",countryName).set("appid",environment.apiKey).set("limit",1)
    return this.httpClient.get(environment.apiUrl, {params : queryParams})
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryWeatherService } from '../../service/country-weather.service';
import { CountryDetails } from '../../model/countrydetails.model';

@Component({
  selector: 'app-country-weather',
  standalone: false,
  templateUrl: './country-weather.component.html',
  styleUrl: './country-weather.component.css'
})
export class CountryWeatherComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute, private countryWeatherSvc:CountryWeatherService){ }

  countryWeatherDetails!:CountryDetails 

  ngOnInit(): void {
    const country= this.activatedRoute.snapshot.paramMap.get('countryName')
    if(country){
      this.countryWeatherSvc.getCountryWeather(country).subscribe({
        next : (data) => this.countryWeatherDetails = new CountryDetails(data.name,data.weather[0].main,data.weather[0].description,data.wind.speed),
        error : (error) => console.error(error)
      })} else {
        console.error('Country name is missing')
      }
    } 
    
}



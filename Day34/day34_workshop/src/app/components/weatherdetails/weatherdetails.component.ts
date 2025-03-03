import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../model/country.model';
import { WeatherService } from '../../service/weather.service';

@Component({
  selector: 'app-weatherdetails',
  standalone: false,
  templateUrl: './weatherdetails.component.html',
  styleUrl: './weatherdetails.component.css'
})
export class WeatherdetailsComponent {

  @Input()
  countryDetails!:Country

}

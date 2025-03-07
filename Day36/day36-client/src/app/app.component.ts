import { Component, inject, OnInit } from '@angular/core';
import { CitiesService } from './service/cities.service';
import { CityStore } from './store/city.store';
import { City } from './model/city';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'day36-client';

  private citiesSvc = inject(CitiesService)
  private citiesStore = inject(CityStore)
  cities!:City[]

  async ngOnInit(): Promise<void> {
    this.cities = await this.citiesSvc.getCities()
    this.cities.forEach((cityObj) => {
      console.log(cityObj)
      console.log(cityObj.city_name)
      console.log(cityObj.code)
      this.citiesStore.addNewCity(cityObj)
    })
  }
}

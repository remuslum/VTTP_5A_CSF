import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryWeatherComponent } from './components/country-weather/country-weather.component';
import { ListCountriesComponent } from './components/list-countries/list-countries.component';

const routes: Routes = [
  {path : "", component:ListCountriesComponent},
  {path : "weather/:countryName", component:CountryWeatherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

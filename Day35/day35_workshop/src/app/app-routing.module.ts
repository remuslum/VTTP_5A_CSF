import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryWeatherComponent } from './components/country-weather/country-weather.component';

const routes: Routes = [
  {path : "weather/:countryName", component:CountryWeatherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

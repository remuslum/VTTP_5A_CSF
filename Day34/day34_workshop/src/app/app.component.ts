import { Component } from '@angular/core';
import { WeatherService } from './service/weather.service';
import { Country } from './model/country.model';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'day34_workshop';

  countryName:string = ''

  countryDetails!:Country

  constructor(private weatherSvc:WeatherService, private dialog:MatDialog) { }

  protected getCountryName(name:string):void {
    this.countryName = name
    this.getCountryDetails()
  }

  private getCountryDetails():void {
    this.weatherSvc.getCountryInfo(this.countryName).subscribe({
      next: (data) => this.countryDetails = new Country(data.name, data.coord.lat, data.coord.lon,data.weather[0].main,data.weather[0].description),
      error: (error) => this.showErrorMessage('Country cannot be found')
    })
  }

  private showErrorMessage(message:string):void {
    this.dialog.open(ErrorDialogComponent, {
      data : {
        message : message
      }
    })
  }


}

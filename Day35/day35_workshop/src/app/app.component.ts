import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'day35_workshop';

  countriesList:Set<string> = new Set(['Singapore','Kuala Lumpur','Tokyo']) 

  protected addCountry(country:string):void{
    this.countriesList.add(country)
  }

}

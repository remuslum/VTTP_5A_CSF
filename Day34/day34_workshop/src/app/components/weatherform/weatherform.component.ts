import { Component, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-weatherform',
  standalone: false,
  templateUrl: './weatherform.component.html',
  styleUrl: './weatherform.component.css'
})
export class WeatherformComponent {
    form !: FormGroup

    @Output()
    countryDetails = new Subject<string>()

    ngOnInit():void {
      this.form = new FormGroup({
        name: new FormControl<string>('')
      })
    }

    protected getCountryDetails(){
      this.countryDetails.next(this.form.value.name)
    }
}

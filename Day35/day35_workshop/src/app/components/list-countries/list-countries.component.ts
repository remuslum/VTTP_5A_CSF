import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-list-countries',
  standalone: false,
  templateUrl: './list-countries.component.html',
  styleUrl: './list-countries.component.css'
})
export class ListCountriesComponent implements OnInit {
  @Input()
  countriesList:Set<string> = new Set()

  @Output()
  countryToAdd:Subject<string> = new Subject()

  form !:FormGroup

  ngOnInit(): void {
      this.form = new FormGroup({
        city:new FormControl<string>('')
      })
  }

  protected addCountry():void {
    this.countryToAdd.next(this.form.value.city)
  }
}

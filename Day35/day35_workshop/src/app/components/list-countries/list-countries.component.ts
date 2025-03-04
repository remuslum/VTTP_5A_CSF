import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { ListCountriesService } from '../../service/list-countries.service';

@Component({
  selector: 'app-list-countries',
  standalone: false,
  templateUrl: './list-countries.component.html',
  styleUrl: './list-countries.component.css'
})
export class ListCountriesComponent implements OnInit {

  constructor(private listCountrySvc:ListCountriesService){ }

  form !:FormGroup

  countriesList:Set<string> = new Set()

  ngOnInit(): void {
      this.form = new FormGroup({
        city:new FormControl<string>('')
      })
      this.countriesList = this.listCountrySvc.getValues()
  }

  protected addCountry():void {
    this.listCountrySvc.addCountry(this.form.value.city)
  }
}

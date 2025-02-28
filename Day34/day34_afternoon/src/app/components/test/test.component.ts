import { Component, OnInit } from '@angular/core';
import jsonData from "../../../assets/countries.json"
import { Country } from '../../model/country.model';

@Component({
  selector: 'app-test',
  standalone: false,
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent implements OnInit{

  data:any = jsonData

  ngOnInit(): void {
      console.log(this.data)
  }
  canExit():boolean { 
    return confirm('Are you sure you want to exit?')
  }

  



}

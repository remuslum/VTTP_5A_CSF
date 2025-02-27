import { Component, OnInit } from '@angular/core';
import { from, map, Observable } from 'rxjs';

@Component({
  selector: 'app-example',
  standalone: false,
  templateUrl: './example.component.html',
  styleUrl: './example.component.css'
})
export class ExampleComponent implements OnInit {
  ngOnInit(): void {
    
  }
  //from -> converts array-like objects into an observable
  numbers:Observable<number> = from([1,2,3,4,5,6,7,8,9,10])

  multiplyby3():void {
    this.numbers.pipe(
      map(data => {return data * 3})
    ).subscribe(item => console.log(item))
  }

  foodArray:Observable<string> = from(['Pizza','Burger','Sandwich','Pasta','Briyani'])

  toUpperCase():void {
    this.foodArray.pipe(
      map(data => {return data.toUpperCase()})
    ).subscribe(data => console.log(data))
  }

  nameArray = from([
    {fname:'John',lname:'Doe'},
    {fname:'Will',lname:'Smith'},
    {fname:'Jackson',lname:'Wang'}
  ])

  concateToFullName():void {
    this.nameArray.pipe(
      map(data => {return data.fname.concat(' ',data.lname)})
    ).subscribe(item => console.log(item))
  }

}

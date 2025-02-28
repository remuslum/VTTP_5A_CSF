import { Component, OnInit } from '@angular/core';
import { from, map, tap } from 'rxjs';

@Component({
  selector: 'app-example',
  standalone: false,
  templateUrl: './example.component.html',
  styleUrl: './example.component.css'
})
export class ExampleComponent implements OnInit {
 numberSeries = from([1,2,3,4,5,6,7,8,9,10])

  ngOnInit():void{
    // this.sumOfNumbers()
    this.mapAndTapExample()
  }

 sumOfNumbers() {
  this.numberSeries
  .pipe(tap(data => {console.log('Tapping: ' + (Number(data) + 1))}))
  .subscribe(data => console.log("Data: " + data))
 }

 // Tap -> Does not alter the data in the data structure
 mapAndTapExample() {
  this.numberSeries.pipe(
    tap(data => {console.log(data)}),
    map(data => {return data * 3}),
    tap(data => {console.log(data)})
  ).subscribe(
    data => {console.log("Subscribe: " + data)}
  )
 }
}

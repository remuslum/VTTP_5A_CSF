import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-navigator',
  standalone: false,
  templateUrl: './navigator.component.html',
  styleUrl: './navigator.component.css'
})
export class NavigatorComponent {
  @Input()
  numberToChange:number = 0

  @Input()
  numbersList:number[] = []

  @Output()
  imageNumber = new Subject<number>();

  protected getNextImage(numberToIncrease:number){
    var finalNumber = numberToIncrease + this.numberToChange
    if(finalNumber > 30){
      this.numberToChange = finalNumber % 31
    } else {
      this.numberToChange = finalNumber
    }
    this.imageNumber.next(this.numberToChange)
  }

  protected getPrevImage(numberToIncrease:number){
    var finalNumber = numberToIncrease - this.numberToChange
    if(finalNumber < 0){
      this.numberToChange = 31 + finalNumber
    } else {
      this.numberToChange = finalNumber
    }
    this.imageNumber.next(this.numberToChange)
  }

}

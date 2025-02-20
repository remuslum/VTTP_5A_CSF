import { Component, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-navigator',
  standalone: false,
  templateUrl: './navigator.component.html',
  styleUrl: './navigator.component.css'
})
export class NavigatorComponent {
  
  numbersList:number[] = Array.from({ length: 31 }, (_, index) => index);

  number:number = 0

  @Output()
  imageNumber = new Subject<number>();

  protected getNumber(newNumber:number){
    this.imageNumber.next(newNumber)
    this.number = newNumber
  }

}

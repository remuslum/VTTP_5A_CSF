import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'day31_workshop';

  numberReceived:number = 0

  numbersList:number[] = Array.from({ length: 31 }, (_, index) => index);

  protected receiveNumber(numberToReceive:number){
    this.numberReceived = numberToReceive
  }
  
}

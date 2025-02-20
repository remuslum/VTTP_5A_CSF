import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-number-image',
  standalone: false,
  templateUrl: './number-image.component.html',
  styleUrl: './number-image.component.css'
})
export class NumberImageComponent {
  @Input()
  number:number = 0

  protected getImage(){
    return `/numbers_folder/number${this.number}.jpg`;
  }

  protected getNextImage(){
    if(this.number == 30){
      this.number = 0
    } else {
      this.number += 1
    }
  }

  protected getPrevImage(){
    if(this.number == 0){
      this.number = 30
    } else {
      this.number -= 1
    }
  }


}

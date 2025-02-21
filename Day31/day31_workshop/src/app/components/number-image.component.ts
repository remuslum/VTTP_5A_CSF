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
}

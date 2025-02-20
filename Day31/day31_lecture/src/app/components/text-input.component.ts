import { Component, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-text-input',
  standalone: false,
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.css'
})
export class TextInputComponent {

  @Output()
  onNewText = new Subject<string>()

  private text = ''

  protected handleKeyPress(event: any){
    console.log(">>>> event: " + event.target.value)
    this.text = event.target.value
    this.onNewText.next(this.text)
  }
}

import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-text',
  standalone: false,
  templateUrl: './text.component.html',
  styleUrl: './text.component.css'
})
export class TextComponent {

  // Define a member and annotate it with @Input
  @Input()
  text: string = "Hello there"

  @Output()
  totalClicks = new Subject<number>()


  protected counter = 0

  protected textClicked() {
    // TypeScript: you must put this in front when referencing a member
    this.counter++;
  }

  protected clearCounter() {
    this.totalClicks.next(this.counter)
    this.counter = 0;
  }

  protected fireClicks(event:any){
    console.log(event)
    this.totalClicks.next(this.counter)
  }

}

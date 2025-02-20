// No ./ in front means that the import comes from node_modules
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'My first Angular application';
  myText = "This is my text";

  texts: string[] = [
    "big black bug bleeds black blood",
    "she sells seashells by the seashore"
  ]
  allClicks = 0;

  whenTotalClicks(event : any) {
    console.info(event)
  }

  whenNewText(newText: string){
    this.texts.push(newText)
  }
}

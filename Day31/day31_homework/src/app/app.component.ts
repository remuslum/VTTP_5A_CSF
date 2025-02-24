import { Component } from '@angular/core';
import { IMAGES } from './images/images';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'day31_homework';

  myImages:string[] = IMAGES

  getPathName(imageName:string){
    return 'assets/fruits/' + imageName; 
  }
}

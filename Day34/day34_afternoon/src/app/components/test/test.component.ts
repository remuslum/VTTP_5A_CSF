import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: false,
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {

  canExit():boolean { 
    return confirm('Are you sure you want to exit?')

  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inventory',
  standalone: false,
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent {

  @Input()
  imageName:string = ""


}

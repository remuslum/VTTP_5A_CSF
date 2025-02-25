import { Component, Input } from '@angular/core';
import { Product } from '../../model/product';
import { CartItem } from '../../model/cartItem';

@Component({
  selector: 'app-table',
  standalone: false,
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  @Input()
  cart:CartItem[] = [];

  

}

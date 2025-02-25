import { Component, DoCheck, inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CartItem } from '../../model/cartItem';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Order } from '../../model/order';

@Component({
  selector: 'app-table',
  standalone: false,
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  @Input()
  // cart!:FormArray;
  cart:CartItem[] = [] 

}

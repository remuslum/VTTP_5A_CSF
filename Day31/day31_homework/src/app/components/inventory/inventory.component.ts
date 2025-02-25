import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../model/product';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-inventory',
  standalone: false,
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent {

  @Input()
  imageName:string = ""

  @Input()
  name:string = ""

  @Input()
  price:number = 0

  @Output()
  productToIncrement:any = new Subject<Product>()

  @Output()
  productToDecrement:any = new Subject<Product>()

  protected addFruitToCart(){
    this.productToIncrement.next({
      name:this.name,
      price:this.price,
      picture:this.imageName
    })
  } 

  protected decreaseFruitFromCart(){
    this.productToDecrement.next({
      name:this.name,
      price:this.price,
      picture:this.imageName
    })
  }


}

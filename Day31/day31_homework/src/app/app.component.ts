import { Component } from '@angular/core';
import { PRODUCTS } from './images/images';
import { Product } from './model/product';
import { CartItem } from './model/cartItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  myProducts:Product[] = PRODUCTS

  tempProduct:Product = {
    name:'',
    price:0,
    picture:''
  };

  cart:CartItem[] = []

  protected getPathName(imageName:string){
    return 'assets/fruits/' + imageName; 
  }

  protected sendToCart(product:Product){
    var item = this.cart.find((x) => x.name === product.name)
    if(item){
      item.quantity += 1
      item.totalPrice = item.quantity * product.price
    } else {
      this.cart.push({
        name:product.name,
        quantity:1,
        totalPrice:product.price
      })
    }
  }

  protected removeFromCart(product:Product){
    var item = this.cart.find((x) => x.name === product.name)
    if(item){
      if(item.quantity == 1){
        var index = this.cart.findIndex((y) => y.name === product.name)
        this.cart.splice(index, 1)
      } else {
        item.quantity -= 1
        item.totalPrice = item.quantity * product.price
      }
    } 
  }
}

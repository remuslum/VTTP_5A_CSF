import { Component, inject } from '@angular/core';
import { PRODUCTS } from './images/images';
import { Product } from './model/product';
import { CartItem } from './model/cartItem';
import { FormBuilder } from '@angular/forms';

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

  cartMap:Map<String,CartItem> = new Map()

  formBuilder = inject(FormBuilder)

  protected getPathName(imageName:string){
    return 'assets/fruits/' + imageName; 
  }

  protected sendItemToCart(product:Product){
    var item = this.cartMap.get(product.name)
    if(item){
      item.quantity += 1
      item.totalPrice = item.quantity * item.totalPrice
    } else {
      var itemToAdd:CartItem = {name:product.name, quantity:1, totalPrice:product.price}
      this.cartMap.set(product.name, itemToAdd)
    }
  }

  protected removeItemFromCart(product:Product){
    var item = this.cartMap.get(product.name)
    if(item){
      if(item.quantity == 1){
        this.cartMap.delete(product.name)
      } else {
        item.quantity -= 1
        item.totalPrice = item.quantity * product.price
      } 
    }
  }

  protected convertMapToList(map:Map<String,CartItem>):CartItem[]{
    var cartList:CartItem[] = []
    for(const value of map.values()){
      cartList.push(value)
    }
    return cartList;
  }

  // protected sendToCart(product:Product){
  //   var item = this.cart.find((x) => x.name === product.name)
  //   if(item){
  //     item.quantity += 1
  //     item.totalPrice = item.quantity * product.price
  //   } else {
  //     this.cart.push({
  //       name:product.name,
  //       quantity:1,
  //       totalPrice:product.price
  //     })
  //   }
  // }

  // protected removeFromCart(product:Product){
  //   var item = this.cart.find((x) => x.name === product.name)
  //   if(item){
  //     if(item.quantity == 1){
  //       var index = this.cart.findIndex((y) => y.name === product.name)
  //       this.cart.splice(index, 1)
  //     } else {
  //       item.quantity -= 1
  //       item.totalPrice = item.quantity * product.price
  //     }
  //   } 
  // }

  // protected convertToFormArray(){
  //   return this.formBuilder.array(
  //     this.cart.map((item) => this.formBuilder.group({
  //       productName:this.formBuilder.control(item.name),
  //       totalPrice:this.formBuilder.control(item.totalPrice),
  //       quantity:this.formBuilder.control(item.quantity)
  //     }))
  //   )
  // }
}

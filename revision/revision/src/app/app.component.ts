import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CartStore } from './cart.store';
import { Observable } from 'rxjs';
import { Item } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'revision';

  private fb = inject(FormBuilder)
  private cartStore = inject(CartStore)

  protected form !: FormGroup
  protected itemCount$!:Observable<number>
  protected items$!:Observable<Item[]>

  ngOnInit() :void {
    this.form = this.createForm()
    this.itemCount$ = this.cartStore.countItemsInCart
    this.getItems()
  }

  private createForm():FormGroup {
    return this.fb.group({
      item: this.fb.control<string>(''),
      price:this.fb.control<string>('')
    })
  }

  protected processForm():void {
    console.log(this.form.value)
    const itemToAdd:Item = this.form.value
    this.cartStore.addToCart(itemToAdd)
  }

  protected deleteItem(){
    this.cartStore.deleteItemFromCart('apple')
  }

  private getItems():void{
    this.items$ = this.cartStore.getItems
  }
    
}

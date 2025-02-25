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
export class TableComponent implements OnInit,DoCheck{

  @Input()
  cart:CartItem[] = [];

  formBuilder = inject(FormBuilder)

  protected form!:FormGroup

  protected cartItems!:FormArray

  ngOnInit(): void {
    this.form = this.createForm()
    this.cartItems = this.formBuilder.array([])
  }

  ngDoCheck(): void {
    this.updateCart()
  }

  private createForm():FormGroup {
    return this.formBuilder.group({
      name:this.formBuilder.control<string>(''),
      address:this.formBuilder.control<string>(''),
      delivery:this.formBuilder.control<string>(''),
      cartItems:this.cartItems
    })
  }

  private updateCart() {
    this.cartItems = this.formBuilder.array(
      this.cart.map((item) => this.formBuilder.group({
        productName:this.formBuilder.control(item.name),
        totalPrice:this.formBuilder.control(item.totalPrice),
        quantity:this.formBuilder.control(item.quantity)
      }))
    )
    this.form.setControl('cartItems',this.cartItems)
  }

  protected processForm(event:Event){
    event.preventDefault()
    this.form.setControl("cart",this.formBuilder.array(
      this.cart.map((item) => this.formBuilder.group({
        productName : this.formBuilder.control(item.name),
        quantity : this.formBuilder.control(item.quantity),
        totalPrice : this.formBuilder.control(item.totalPrice)
      }))
    ))
    const formValue:Order = this.form.value
    console.log("processing form")
    console.info('>>>> form:',formValue)
  }

}

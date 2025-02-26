import { Component, DoCheck, inject, Input, OnInit } from '@angular/core';
import { CartItem } from '../../model/cartItem';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Order } from '../../model/order';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit,DoCheck{

  @Input()
  cartItems!:CartItem[]

  formBuilder = inject(FormBuilder)

  protected form !: FormGroup

  protected cart!:FormArray

  ngOnInit(): void {
    this.form = this.createForm()
    this.cart = this.formBuilder.array([])
  }
  ngDoCheck(): void {
    this.updateCart()
  }

  private createForm():FormGroup {
    return this.formBuilder.group({
      name:this.formBuilder.control<string>(''),
      address:this.formBuilder.control<string>(''),
      delivery:this.formBuilder.control<string>(''),
      cartItems:this.cart
    })
  }

  private updateCart() {
    this.cart = this.formBuilder.array(
      this.cartItems.map((item) => this.formBuilder.group({
        productName:this.formBuilder.control(item.name),
        totalPrice:this.formBuilder.control(item.totalPrice),
        quantity:this.formBuilder.control(item.quantity)
      }))
    )
    this.form.setControl('cartItems',this.cart)
  }

  protected processForm(event:Event){
    event.preventDefault()
    // this.form.setControl("cart",this.formBuilder.array(
    //   this.cart.map((item) => this.formBuilder.group({
    //     productName : this.formBuilder.control(item.name),
    //     quantity : this.formBuilder.control(item.quantity),
    //     totalPrice : this.formBuilder.control(item.totalPrice)
    //   }))
    // ))
    const formValue:Order = this.form.value
    console.log("processing form")
    console.info('>>>> form:',formValue)
  }

  protected toggleRadio(value:string){
    if(this.form.value.delivery === value){
      this.form.get("delivery")?.setValue('')
    }
  }

  
}

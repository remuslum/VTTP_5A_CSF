import { Component, inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { PurchaseOrder } from '../models';

@Component({
  selector: 'app-purchaseorder',
  standalone: false,
  templateUrl: './purchaseorder.component.html',
  styleUrl: './purchaseorder.component.css'
})
export class PurchaseorderComponent implements OnInit{
  // inject Formbuilder
  protected formBuilder = inject(FormBuilder)

  // form model
  protected form !: FormGroup

  // availability array
  protected availability !: FormArray

  //lineItems array
  protected lineItems !: FormArray

  protected timeslots = [
    {label:"0900-1200",value:1},
    {label:"1200-1600",value:2},
    {label:"1600-2000",value:3}
  ]

  ngOnInit(): void {
    this.form = this.createForm()    
  }

  protected createForm(){
    this.lineItems = this.formBuilder.array([])
    return this.formBuilder.group({
      name:this.formBuilder.control<string>(''),
      address:this.formBuilder.control<string>(''),
      email:this.formBuilder.control<string>(''),
      deliveryDate:this.formBuilder.control<string>(''),
      availability:this.formBuilder.array([]),
      urgent:this.formBuilder.control<boolean>(false),
      lineItems:this.lineItems
    })
  }

  protected onCheckboxChange(event:any){
    const value = event.target.value
    const availability = this.form.get('availability') as FormArray
    if(event.target.checked){
      availability.push(this.formBuilder.control(value))
    } else {
      const index = availability.controls.findIndex(control => control.value == value)
      availability.removeAt(index)
    }
  }

  protected submitForm(){
   const formValue:PurchaseOrder = this.form.value 
   console.info(formValue)
  }

  private createLineItem(){
    return this.formBuilder.group({
      itemName:this.formBuilder.control<string>(''),
      quantity:this.formBuilder.control<number>(0),
      unitPrice:this.formBuilder.control<number>(0)
    })
  }

  protected addLineItem(){
    const lineItems = this.form.get('lineItems') as FormArray
    lineItems.push(this.createLineItem())
  }


}

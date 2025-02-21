import { FormArray } from "@angular/forms";

export interface PurchaseOrder {
    name:string,
    address:string,
    email:string,
    deliveryDate:string,
    availability:FormArray,
    urgent:boolean,
    lineItems:LineItems[]
}

export interface LineItems {
    itemName:string,
    quantity:number,
    unitPrice:number
}
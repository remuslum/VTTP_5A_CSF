import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-child',
  standalone: false,
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.css'
})
export class ViewChildComponent implements OnInit{
  childText:string = ''

  productForm!: FormGroup;

  constructor(private formBuilder:FormBuilder){
    this.productForm = this.formBuilder.group({
      products:this.formBuilder.array([])
    })
  }

  ngOnInit(): void {
    
  }

  get products(){
    return this.productForm.get('products') as FormArray
  }

  onAddRow(){
    this.products.push(this.createFormItem())
  }

  createFormItem():FormGroup {
    return this.formBuilder.group({
      name:'',
      description:'',
      qty:''
    })
  }

  removeProduct(i:number):void {
    this.products.removeAt(i)
  }

  changeText(){
    this.childText = "Updated by ViewChild"
  }

  onSubmit():void {
    console.log(this.productForm.value)
  }
}

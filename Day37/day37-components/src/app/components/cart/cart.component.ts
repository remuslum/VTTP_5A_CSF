import { Component, ComponentRef, inject, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  @ViewChild('container', {read:ViewContainerRef, static:true}) container !: ViewContainerRef
  private componentRef !: ComponentRef<ItemComponent>

  protected form !: FormGroup
  private formBuilder = inject(FormBuilder)

  ngOnInit(): void {
    this.form = this.createForm()
  }

  protected createForm():FormGroup {
    return this.formBuilder.group({
      name : this.formBuilder.control<string>(''),
      address : this.formBuilder.control<string>('')
    })
  }

  protected addComponent() {
    this.componentRef = this.container.createComponent(ItemComponent)
  }

  protected processForm() {
    console.log(this.form.value)
  }
}

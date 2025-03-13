import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-item',
  standalone: false,
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent implements OnInit{
  protected form !: FormGroup

  private formBuilder = inject(FormBuilder)

  ngOnInit(): void {
    this.form = this.createForm()
  }

  protected createForm():FormGroup {
    return this.formBuilder.group({
      itemName : this.formBuilder.control<string>(''),
      quantity : this.formBuilder.control<number>(0)
    })
  }

  protected processForm():void {
    console.log(this.form.value)
  }
}

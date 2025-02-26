import { Component, inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit{
  form!:FormGroup

  formBuilder:FormBuilder = inject(FormBuilder);

  protected hobbies !: FormArray

  ngOnInit():void{
    this.form = this.createForm()
  }

  private createForm():FormGroup {
    this.hobbies = this.formBuilder.array([])
    return this.formBuilder.group({
      name:this.formBuilder.control<string>('',[Validators.required]),
      email:this.formBuilder.control<string>('',[Validators.required]),
      phone:this.formBuilder.control<number>(0,[Validators.required]),
      hobbies:this.hobbies
    })
  }

  private createHobby():FormGroup {
    return this.formBuilder.group({
      activity:this.formBuilder.control<string>('')
    })
  } 

  protected addHobby():void{
    this.hobbies.push(this.createHobby())
  }

  protected removeHobby(i:number):void {
    this.hobbies.removeAt(i)
  }

  protected processForm():void {
    console.log(this.form.value)
  }
}

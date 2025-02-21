import { Component, inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from '../../models';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent implements OnInit{

  urgency:string = "2"

  // inject() -> @Autowired
  formBuilder = inject(FormBuilder)
  // form model
  protected form!:FormGroup

  // form array
  protected collaborators!:FormArray

  ngOnInit(): void {
    this.form = this.createForm()
  }

  private createForm():FormGroup {
    this.collaborators = this.formBuilder.array([])
    return this.formBuilder.group({
       taskName:this.formBuilder.control<string>('',[Validators.required, Validators.minLength(3)]),
       priority:this.formBuilder.control<string>('1'),
       dueDate:this.formBuilder.control<string>('',[Validators.required]),
       urgency:this.formBuilder.control<number>(2),
       comments:this.formBuilder.control<string>('',[Validators.required]),
       procrastinate:this.formBuilder.control<boolean>(false),
       collaborators:this.collaborators
    })
  }

  protected processForm():void {
    const formValue:Task = this.form.value
    console.info('>>> form:',formValue)
  }

  protected isCtrlInvalid(ctrl:string):boolean{
    return !!this.form.get(ctrl)?.invalid
  }

  protected createCollaborators():FormGroup{
    return this.formBuilder.group({
      name:this.formBuilder.control<string>(''),
      email:this.formBuilder.control<string>('')
    })
  }

  protected addCollaborators(){
    // create the collaborator form group
    const col = this.createCollaborators()
    // return the collborator array
    this.collaborators.push(this.createCollaborators())
  }

}

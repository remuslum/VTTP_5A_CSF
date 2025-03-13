import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Task } from '../../models/task.model';
import { TaskStore } from '../../store/task.store';
import { map, of } from 'rxjs';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent implements OnInit{

  private formBuilder = inject(FormBuilder)
  protected form!:FormGroup
  protected taskStore = inject(TaskStore)

  private namesOfOb$ = of('Alice','Bob','Charles')

  ngOnInit(): void {
    this.form = this.createForm()
    this.namesOfOb$.pipe(
      map(name => name.toUpperCase())
    ).subscribe((val) => console.log(val))
  }

  createForm():FormGroup {
    return this.formBuilder.group({
      name: this.formBuilder.control<string>(''),
      priority: this.formBuilder.control<string>('low')
    })
  }

  processForm(){
    console.log(this.form.value)

    const newTask:Task = {
      id:'',
      ...this.form.value
    }
    console.log(newTask)
    this.taskStore.addTask(newTask)
    this.form = this.createForm()
    // this.taskStore.getTaskCount$.subscribe({
    //   next : (value) => console.log(value)
    // })
  }

  
}

import { Component, inject, OnInit } from '@angular/core';
import { TaskStore } from '../../store/task.store';
import { Observable } from 'rxjs';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-list',
  standalone: false,
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit{
  private taskStore = inject(TaskStore)
  protected tasks$!: Observable<Task[]>
  protected allTasks : Task[] = []

  ngOnInit(): void {
    this.tasks$ = this.taskStore.getTasks$('all')
    this.tasks$.subscribe({
      next : (value) => this.allTasks = value 
    })
  }  
}

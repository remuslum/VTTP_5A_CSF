import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskStore } from '../../store/task.store';

@Component({
  selector: 'app-task-count',
  standalone: false,
  templateUrl: './task-count.component.html',
  styleUrl: './task-count.component.css'
})
export class TaskCountComponent implements OnInit{
  protected count:number = 0
  protected count$!:Observable<number>
  private taskStore = inject(TaskStore)

  ngOnInit(): void {
    this.count$ = this.taskStore.getTaskCount$
    this.count$.subscribe({
      next : (value) => this.count = value
    })
  }
}

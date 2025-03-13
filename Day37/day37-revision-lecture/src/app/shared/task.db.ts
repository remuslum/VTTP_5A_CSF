import { Injectable } from '@angular/core';
import Dexie, { Table } from 'dexie'
import { Task } from '../models/task.model';

@Injectable(
    {providedIn: "root"}
)
export class TaskDb extends Dexie{
    tasks: Table<Task, string>;

    constructor() {
        super("taskDb");
        this.version(1).stores({
            tasks : "id"
        });
        this.tasks = this.table('tasks');
    }

    getAllTasks() {
        return this.tasks.toArray();
    }

    // Add a new task
    saveTask(task:Task):Promise<Task> {
        return this.tasks.put(task).then(() => task);
    }

    // Remove a task
    removeTask(id:string):void {
        this.tasks.delete(id)
    }
}
import { TaskSlice } from "../models/task-slice.model";
import { ComponentStore } from '@ngrx/component-store';
import { Task } from "../models/task.model";
import {v4 as uuidv4 } from 'uuid';
import { Injectable } from "@angular/core";

const INIT : TaskSlice = {
    tasks: [],
    audit: [],
    priorityFilter: 'all'
}

@Injectable({
    providedIn:'root'
})
export class TaskStore extends ComponentStore<TaskSlice> {
    constructor() {
        // Init to empty array
        super(INIT)
    }

    // Update moethods
    // addTask(task) - add task to the store
    readonly addTask = this.updater<Task>((slice:TaskSlice, newTask:Task) => {
        const toSave:Task = {
            ...newTask, id:uuidv4().substring(0,8)
        }
        return {
            tasks : [...slice.tasks, toSave],
            audit : [...slice.audit, 'Task ${toSave.name} added. ${new Date().toLocaleString()}'],
            priorityFilter : slice.priorityFilter
        } as TaskSlice
    })

    // Delete method - remove a task
    readonly deleteTask = this.updater<string>((slice:TaskSlice, taskId:string) => {
        return {
            tasks : slice.tasks.filter((task:Task) => task.id !== taskId),
            audit : [...slice.audit, 'Task ${toSave.name} added. ${new Date().toLocaleString()}'],
            priorityFilter : slice.priorityFilter
        } as TaskSlice
    })

    // Selector query - get all tasks
    // readonly getTasks = this.select<Task[]>((slice:TaskSlice) => {
    //     return slice.tasks.filter(t => 
    //         (slice.priorityFilter === 'all' || t.priority === slice.priorityFilter)
    //     )
    // })

    readonly getTasks$ = (priority:string) => {
        return this.select<Task[]>((slice:TaskSlice) => slice.tasks.filter(
            t => (priority === 'all') || (priority === slice.priorityFilter)
        ))
    }

    // selector query the state get count of tasks
    readonly getTaskCount$ = this.select<number>((slice:TaskSlice) => {
        return slice.tasks.length
    })
}
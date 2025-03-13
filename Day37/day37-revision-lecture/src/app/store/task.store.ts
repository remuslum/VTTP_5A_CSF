import { TaskSlice } from "../models/task-slice.model";
import { ComponentStore } from '@ngrx/component-store';
import { Task } from "../models/task.model";
import {v4 as uuidv4 } from 'uuid';
import { inject, Injectable } from "@angular/core";
import { TaskDb } from "../shared/task.db";
import { catchError, concatMap, EMPTY, from, mergeMap, Observable, tap } from "rxjs";

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

    private taskDb = inject(TaskDb)

    // Update moethods
    // addTask(task) - add task to the store
    readonly saveTask = this.effect(
        (task$:Observable<Task>) => task$.pipe(
            mergeMap( newTask => {
                const toSaveTask = {
                    ...newTask,
                    id: uuidv4().substring(0,8)
                }
                return from(this.taskDb.saveTask(toSaveTask))
            }),
            tap(newTask => this.addTask(newTask)),
            catchError(() => EMPTY)
        ))

    // Mutator prevents us from rolling back changes to the DB if something
    // goes wrong when saving to state after db ahs been writting to
    readonly addTask = this.updater<Task>((slice:TaskSlice, newTask:Task) => {
        const toSave:Task = {
            ...newTask, id:uuidv4().substring(0,8)
        }
        this.taskDb.saveTask(toSave)
        return {
            tasks : [...slice.tasks, toSave],
            audit : [...slice.audit, 'Task ${toSave.name} added. ${new Date().toLocaleString()}'],
            priorityFilter : slice.priorityFilter
        } as TaskSlice
    })

    // Delete method - remove a task
    readonly deleteTask = this.updater<string>((slice:TaskSlice, taskId:string) => {
        this.taskDb.removeTask(taskId)
        return {
            tasks : slice.tasks.filter((task:Task) => task.id !== taskId),
            audit : [...slice.audit, 'Task ${toSave.name} added. ${new Date().toLocaleString()}'],
            priorityFilter : slice.priorityFilter
        } as TaskSlice
    })

    readonly removeTask = this.effect(
        (taskId$ : Observable<string>) => taskId$.pipe(
            concatMap((id) => from(this.taskDb.removeTask(id)))
        )
    )

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
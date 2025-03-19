import { Injectable } from "@angular/core"
import { Todo } from "./todo.model"
import { Store, StoreConfig } from '@datorama/akita'

export interface TodoState {
    todos: Todo[]
    isLoaded:boolean
}

export const getInitialState = () => {
    return {
        todos : [],
        isLoaded : false
    }
}

@Injectable()
@StoreConfig({name:'todo'})
export class TodoStore extends Store<TodoState> {
    constructor(){
        super(getInitialState())
    }
}
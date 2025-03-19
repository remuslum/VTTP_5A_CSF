import { Query } from "@datorama/akita";
import { TodoState, TodoStore } from "./todo.store";
import { inject } from "@angular/core";
import { Observable } from "rxjs";
import { Todo } from "./todo.model";

export class TodoQuery extends Query<TodoState>{
    // This todoStore is a token
    todoStore = inject(TodoStore)

    getToDos():Observable<Todo[]>{
        return this.select(state => state.todos)
    }

    getLoaded():Observable<boolean> {
        return this.select(state => state.isLoaded)
    }
}
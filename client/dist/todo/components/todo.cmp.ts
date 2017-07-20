import {Component, OnInit} from "@angular/core";
import {TodoService} from "../services/todo.service";

type Todo = {
    todoMessage: string;
    _id?: string;
};

@Component({
    selector: "todo-cmp",
    templateUrl: "todo/templates/todo.html",
    styleUrls: ["todo/styles/todo.css"]
})

export class TodoCmp implements OnInit {
    title: string = "Todo";
    todos: Todo[] = [];
    todoForm: Todo;

    /**
     * Called first time before the ngOnInit()
     */
    constructor(private _todoService: TodoService) {
        this.todoForm = {
            "todoMessage": ""
        };
    }

    /**
     * Called after the constructor
     */
    ngOnInit() {
        this._fnGetAll();
    }

    /**
     * Get list of todo.
     */
    private _fnGetAll(): void {
        this._todoService
            .fnGetAll()
            .subscribe((todos) => {
                this.todos = todos;
            });
    }

    /**
     * Create a new todo.
     * @param {string} message - Todo message.
     */
    fnAdd(message: string): void {
        this._todoService
            .fnAdd(message)
            .subscribe((m) => {
                this.todos.push(m);
                this.todoForm.todoMessage = "";
            });
    }

    /**
     * Update existing todo.
     * @param {Object} todo.
     */
    fnUpdate(todo): void {
        if(todo.isReadOnly) {
            todo.isProcess = true;
            this._todoService
                .fnUpdate(todo._id, todo.todoMessage)
                .subscribe(() => {
                    todo.isReadOnly = !todo.isReadOnly;
                    todo.isProcess = false;
                });
        } else {
            todo.isReadOnly = !todo.isReadOnly;
        }
    }

    /**
     * Remove todo.
     * @param {string} id - Todo id.
     */
    fnRemove(id: string): void {
        let result = confirm("Are you sure you want to delete this?");
        if (result) {
            this._todoService
                .fnRemove(id)
                .subscribe(() => {
                    this.todos.forEach((t, i) => {
                        if (t._id === id)
                            return this.todos.splice(i, 1);
                    });
                });
        }
    }
}

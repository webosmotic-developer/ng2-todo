"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var todo_service_1 = require("../services/todo.service");
var TodoCmp = (function () {
    /**
     * Called first time before the ngOnInit()
     */
    function TodoCmp(_todoService) {
        this._todoService = _todoService;
        this.title = "Todo";
        this.todos = [];
        this.todoForm = {
            "todoMessage": ""
        };
    }
    /**
     * Called after the constructor
     */
    TodoCmp.prototype.ngOnInit = function () {
        this._fnGetAll();
    };
    /**
     * Get list of todo.
     */
    TodoCmp.prototype._fnGetAll = function () {
        var _this = this;
        this._todoService
            .fnGetAll()
            .subscribe(function (todos) {
            _this.todos = todos;
        });
    };
    /**
     * Create a new todo.
     * @param {string} message - Todo message.
     */
    TodoCmp.prototype.fnAdd = function (message) {
        var _this = this;
        this._todoService
            .fnAdd(message)
            .subscribe(function (m) {
            _this.todos.push(m);
            _this.todoForm.todoMessage = "";
        });
    };
    /**
     * Update existing todo.
     * @param {Object} todo.
     */
    TodoCmp.prototype.fnUpdate = function (todo) {
        if (todo.isReadOnly) {
            todo.isProcess = true;
            this._todoService
                .fnUpdate(todo._id, todo.todoMessage)
                .subscribe(function () {
                todo.isReadOnly = !todo.isReadOnly;
                todo.isProcess = false;
            });
        }
        else {
            todo.isReadOnly = !todo.isReadOnly;
        }
    };
    /**
     * Remove todo.
     * @param {string} id - Todo id.
     */
    TodoCmp.prototype.fnRemove = function (id) {
        var _this = this;
        var result = confirm("Are you sure you want to delete this?");
        if (result) {
            this._todoService
                .fnRemove(id)
                .subscribe(function () {
                _this.todos.forEach(function (t, i) {
                    if (t._id === id)
                        return _this.todos.splice(i, 1);
                });
            });
        }
    };
    TodoCmp = __decorate([
        core_1.Component({
            selector: "todo-cmp",
            templateUrl: "todo/templates/todo.html",
            styleUrls: ["todo/styles/todo.css"]
        }),
        __metadata("design:paramtypes", [todo_service_1.TodoService])
    ], TodoCmp);
    return TodoCmp;
}());
exports.TodoCmp = TodoCmp;

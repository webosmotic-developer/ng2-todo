"use strict";

const TodoController = require("../controller/todo.controller");

module.exports = class TodoRoutes {
    static init(router) {
        router
            .route("/api/todos")
            .get(TodoController.fnGetAll)
            .post(TodoController.fnCreateTodo);

        router
            .route("/api/todos/:id")
            .get(TodoController.fnGetById)
            .put(TodoController.fnUpdateTodo)
            .delete(TodoController.fnDeleteTodo);
    }
};

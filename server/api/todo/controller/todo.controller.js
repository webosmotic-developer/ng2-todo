"use strict";

const TodoDAO = require("../dao/todo.dao");

module.exports = class TodoController {

    /**
     * Get list of todo.
     * @param {object} req - request object.
     * @param {object} res - response object.
     */
    static fnGetAll(req, res) {
        TodoDAO
            .fnGetAll()
            .then(todos => res.status(200).json(todos))
            .catch(error => res.status(400).json(error));
    }

    /**
     * Get a todo.
     * @param {object} req - request object.
     * @param {object} res - response object.
     */
    static fnGetById(req, res) {
        TodoDAO
            .fnGetById(req.params.id)
            .then(todo => res.status(200).json(todo))
            .catch(error => res.status(400).json(error));
    }

    /**
     * Create a new todo.
     * @param {object} req - request object.
     * @param {object} res - response object.
     */
    static fnCreateTodo(req, res) {
        let _todo = req.body;

        TodoDAO
            .fnCreateTodo(_todo)
            .then(todo => res.status(201).json(todo))
            .catch(error => res.status(400).json(error));
    }

    /**
     * Update existing todo.
     * @param {object} req - request object.
     * @param {object} res - response object.
     */
    static fnUpdateTodo(req, res) {
        let _todo = req.body;

        TodoDAO
            .fnUpdateTodo(req.params.id, _todo)
            .then(todo => res.status(201).json(todo))
            .catch(error => res.status(400).json(error));
    }

    /**
     * Remove todo.
     * @param {object} req - request object.
     * @param {object} res - response object.
     */
    static fnDeleteTodo(req, res) {
        let _id = req.params.id;

        TodoDAO
            .fnDeleteTodo(_id)
            .then(() => res.status(200).end())
            .catch(error => res.status(400).json(error));
    }
};

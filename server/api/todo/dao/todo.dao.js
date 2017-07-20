"use strict";

let mongoose = require("mongoose");
const Promise = require("bluebird");
const todoSchema = require("../model/todo.model");
const _ = require("lodash");

/**
 * Get list of todo.
 */
todoSchema.statics.fnGetAll = () => {
    return new Promise((resolve, reject) => {
        let _query = {};

        Todo.find(_query)
            .exec((err, todos) => {
                err ? reject(err) : resolve(todos);
            });
    });
};

/**
 * Get a todo.
 * @param {string} id - Todo id.
 */
todoSchema.statics.fnGetById = (id) => {
    return new Promise((resolve, reject) => {
        if (!id) {
            return reject(new TypeError("Id is not defined."));
        }

        Todo.findById(id)
            .exec((err, todo) => {
                err ? reject(err) : resolve(todo);
            });
    });
};

/**
 * Create a new todo.
 * @param {string} todo - Todo message.
 */
todoSchema.statics.fnCreateTodo = (todo) => {
    return new Promise((resolve, reject) => {
        if (!_.isObject(todo)) {
            return reject(new TypeError("Todo is not a valid object."));
        }

        let _todo = new Todo(todo);

        _todo.save((err, saved) => {
            err ? reject(err) : resolve(saved);
        });
    });
};

/**
 * Update existing todo.
 * @param {string} id - Todo id.
 * @param {Object} _todo.
 */
todoSchema.statics.fnUpdateTodo = (id, _todo) => {
    return new Promise((resolve, reject) => {
        if (!id) {
            return reject(new TypeError("Id is not defined."));
        }

        if (!_.isObject(_todo)) {
            return reject(new TypeError("Todo is not a valid object."));
        }

        Todo.findById(id)
            .exec((err, todo) => {
                if (err) {
                    reject(err);
                }
                if (!todo) {
                    reject(new TypeError('Todo Not Found'));
                }
                let updated = _.merge(todo, _todo);
                updated.save(function (err) {
                    if (err) {
                        reject(err);
                    }
                    return resolve(_todo);
                });
            });
    });
};

/**
 * Remove todo.
 * @param {string} id - Todo id.
 */
todoSchema.statics.fnDeleteTodo = (id) => {
    return new Promise((resolve, reject) => {
        if (!_.isString(id)) {
            return reject(new TypeError("Id is not a valid string."));
        }

        Todo.findByIdAndRemove(id)
            .exec((err, deleted) => {
                err ? reject(err) : resolve();
            });
    });
};

const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;

import {Inject, Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Http, Headers} from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class TodoService {
    static ENDPOINT: string = "/api/todos/:id";

    constructor(@Inject(Http) private _http: Http) {
    }

    /**
     * Get list of todo.
     */
    fnGetAll(): Observable<any> {
        return this._http
            .get(TodoService.ENDPOINT.replace(/:id/, ""))
            .map((r) => r.json());
    }

    /**
     * Get a todo.
     * @param {string} id - Todo id.
     */
    fnGetById(id: string): Observable<any> {
        return this._http
            .get(TodoService.ENDPOINT.replace(/:id/, id))
            .map((r) => r.json());
    }

    /**
     * Create a new todo.
     * @param {string} message - Todo message.
     */
    fnAdd(message: string): Observable<any> {
        let _messageStr = JSON.stringify({todoMessage: message});

        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        return this._http
            .post(TodoService.ENDPOINT.replace(/:id/, ""), _messageStr, {headers})
            .map((r) => r.json());
    }

    /**
     * Update existing todo.
     * @param {string} id - Todo id.
     * @param {string} message - Todo message.
     */
    fnUpdate(id: string, message: string): Observable<any> {
        let _messageStr = JSON.stringify({todoMessage: message});

        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        return this._http
            .put(TodoService.ENDPOINT.replace(/:id/, id), _messageStr, {headers})
            .map((r) => r.json());
    }

    /**
     * Remove todo.
     * @param {string} id - Todo id.
     */
    fnRemove(id: string): Observable<any> {
        return this._http
            .delete(TodoService.ENDPOINT.replace(/:id/, id));
    }
}

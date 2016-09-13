import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { FooService } from "../services";
import { AppState, AppStore } from "../store";
import { ADD_FOO_SUCCESS, GET_FOO_SUCCESS, REMOVE_FOO_SUCCESS } from "../constants";
import { Foo } from "../models";
import { Observable } from "rxjs";
import { guid } from "../utilities";

@Injectable()
export class FooActions {
    constructor(private _fooService: FooService, private _store: AppStore) { }

    public add(foo: Foo) {
        const newGuid = guid();
        this._fooService.add(foo)
            .subscribe(book => {
                this._store.dispatch({
                    type: ADD_FOO_SUCCESS,
                    payload: foo
                },newGuid);                
            });
        return newGuid;
    }

    public get() {                          
        return this._fooService.get()
            .subscribe(foos => {
                this._store.dispatch({
                    type: GET_FOO_SUCCESS,
                    payload: foos
                });
                return true;
            });
    }

    public remove(options: {id: number}) {
        return this._fooService.remove({ id: options.id })
            .subscribe(foo => {
                this._store.dispatch({
                    type: REMOVE_FOO_SUCCESS,
                    payload: options.id
                });
                return true;
            });
    }

    public getById(options: { id: number }) {
        return this._fooService.getById({ id: options.id })
            .subscribe(foo => {
                this._store.dispatch({
                    type: GET_FOO_SUCCESS,
                    payload: [foo]
                });
                return true;
            });
    }
}

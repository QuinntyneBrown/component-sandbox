import { Action } from "@ngrx/store";
import { ADD_FOO_SUCCESS, GET_FOO_SUCCESS, REMOVE_FOO_SUCCESS } from "../constants";
import { initialState } from "./initial-state";
import { AppState } from "./app-state";
import { Foo } from "../models";
import { addOrUpdate, pluckOut } from "../utilities";

export const foosReducer = (state: AppState = initialState, action: Action) => {
    switch (action.type) {
        case ADD_FOO_SUCCESS:
            var entities: Array<Foo> = state.foos;
            var entity: Foo = action.payload;
            addOrUpdate({ items: entities, item: entity});            
            return Object.assign({}, state, { foos: entities });

        case GET_FOO_SUCCESS:
            var entities: Array<Foo> = state.foos;
            var newOrExistingFoos: Array<Foo> = action.payload;
            for (let i = 0; i < newOrExistingFoos.length; i++) {
                addOrUpdate({ items: entities, item: newOrExistingFoos[i] });
            }                                    
            return Object.assign({}, state, { foos: entities });

        case REMOVE_FOO_SUCCESS:
            var entities: Array<Foo> = state.foos;
            var id = action.payload;
            pluckOut({ value: id, items: entities });
            return Object.assign({}, state, { foos: entities });

        default:
            return state;
    }
}


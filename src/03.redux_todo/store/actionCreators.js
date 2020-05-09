import {
    INPUTING_TODO,
    ADD_TODO,
    DELETE_TODO_ITEM,
    INIT_AJAX_LIST,
} from './actionTypes.js';

import axios from "axios";

export const getInputTodoAction = (value) => {
    return {
        type: INPUTING_TODO,
        payload: value,
    };
};

export const getAddTodoAction = (inputTodo) => {
    return {
        type: ADD_TODO,
        payload: inputTodo,
    };
};

export const getDeleteTodoItemAction = (itemIndex) => {
    return {
        type: DELETE_TODO_ITEM,
        payload: itemIndex,
    };
};

export const getInitAjaxList = (data) => {
    return {
        type: INIT_AJAX_LIST,
        payload: data,
    };
};

export const getTodoListFunAction = () => {
    return (dispatch) => {
        axios.get("http://mock-api.com/aKbjevKx.mock/getlistdata")
            .then(result => {
                const action = getInitAjaxList(result.data)
                dispatch(action);
            })
    }
}

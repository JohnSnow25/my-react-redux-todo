import { INPUTING_TODO, ADD_TODO, DELETE_TODO_ITEM, INIT_AJAX_LIST } from './actionTypes.js';

const initState = {
    inputTodo: '',
    todoList: [],
};

export default (state = initState, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case INPUTING_TODO:
            newState.inputTodo = action.payload;
            return newState;
        case ADD_TODO:
            newState.todoList = [...state.todoList, action.payload];
            newState.inputTodo = '';
            return newState;
        case DELETE_TODO_ITEM:
            newState.todoList = state.todoList.filter(
                (todo, index) => index !== action.payload
            );
            return newState;
        case INIT_AJAX_LIST:
            newState.todoList = action.payload;
            return newState
        default:
            return state;
    }
};

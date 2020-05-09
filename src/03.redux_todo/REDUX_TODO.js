import React, { Component } from 'react';

import 'antd/dist/antd.css';
import axios from "axios";

import {
    getInputTodoAction,
    getAddTodoAction,
    getDeleteTodoItemAction,
    getInitAjaxList,
} from './store/actionCreators.js';
import store from './store/store.js';
import TODOUI from './REDUX_TODO_UI.js';

class REDUX_TODO extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleItemClick = this.handleItemClick.bind(this);
        store.subscribe(this.handleStoreChange);
    }
    componentDidMount() {
        axios.get("http://mock-api.com/aKbjevKx.mock/getlistdata")
            .then(result => {
                const action = getInitAjaxList(result.data)
                store.dispatch(action);
            })
    }
    handleStoreChange() {
        this.setState(store.getState());
    }
    handleInputChange(e) {
        const action = getInputTodoAction(e.target.value);
        store.dispatch(action);
    }
    handleButtonClick() {
        const action = getAddTodoAction(this.state.inputTodo);
        store.dispatch(action);
    }
    handleItemClick(itemIndex) {
        const action = getDeleteTodoItemAction(itemIndex);
        store.dispatch(action);
    }
    render() {
        return (
            <TODOUI
                inputTodo={this.state.inputTodo}
                todoList={this.state.todoList}
                handleInputChange={this.handleInputChange}
                handleButtonClick={this.handleButtonClick}
                handleItemClick={this.handleItemClick}
            />
        );
    }
}

export default REDUX_TODO;

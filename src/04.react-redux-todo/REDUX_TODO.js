import React, { Component } from 'react';

import 'antd/dist/antd.css';
import axios from "axios";
import { connect } from "react-redux";

import {
    getInputTodoAction,
    getAddTodoAction,
    getDeleteTodoItemAction,
    getInitAjaxList,
} from './store/actionCreators.js';
import TODOUI from './REDUX_TODO_UI.js';

class REDUX_TODO extends Component {
    componentDidMount() {
        this.props.handleGetTodoList();
    }
    render() {
        const { inputTodo, todoList, handleInputChange, handleButtonClick, handleItemClick } = this.props;
        return (
            <TODOUI
                inputTodo={inputTodo}
                todoList={todoList}
                handleInputChange={handleInputChange}
                handleButtonClick={handleButtonClick}
                handleItemClick={handleItemClick}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        inputTodo: state.inputTodo,
        todoList: state.todoList,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputChange: (e) => {
            const action = getInputTodoAction(e.target.value);
            dispatch(action);
        },
        handleButtonClick: () => {
            const action = getAddTodoAction();
            dispatch(action);
        },
        handleItemClick: (itemIndex) => {
            const action = getDeleteTodoItemAction(itemIndex);
            dispatch(action);
        },
        handleGetTodoList: () => {
            axios.get("http://mock-api.com/aKbjevKx.mock/getlistdata")
            .then(result => {
                const action = getInitAjaxList(result.data)
                dispatch(action);
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(REDUX_TODO);

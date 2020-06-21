import React, { Component, Fragment } from 'react';
import TodoItem from "./TodoItem";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputContent: "",
            todoList: []
        }
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleLiClick = this.handleLiClick.bind(this);
    }
    async handleButtonClick() {
        await this.getButtonClickPromise();
        console.log("div length: ", this.ulDom.querySelectorAll("div").length);
    }
    getButtonClickPromise() {
        return new Promise((resolve, reject) => {
            this.setState((prevState) => {
                return {
                    todoList: [...prevState.todoList, prevState.inputContent],
                    inputContent: ""
                }
            }, resolve)
        })
    }
    handleInputChange(event) {
        this.setState({
            inputContent: event.target.value
        })
    }
    handleLiClick(todoIndex, event) {
        const list = [...this.state.todoList];
        list.splice(todoIndex, 1);
        this.setState({
            todoList: list
        })
    }
    render() {
        return (
            <Fragment>
                <div>
                    <input 
                        type="text"
                        value={this.state.inputContent}
                        onChange={this.handleInputChange}
                    />
                    <button onClick={this.handleButtonClick}>Submit</button>
                </div>
                <ul ref={(ul) => {this.ulDom = ul}}>
                    {
                        this.state.todoList.map((todo, index) => {
                            return (
                                <div key={index}>
                                    <TodoItem 
                                        itemIndex={index}
                                        todoItem={todo}
                                        itemHandler={this.handleLiClick.bind(this)}
                                    />
                                </div>
                            )
                        })
                    }
                </ul>
            </Fragment>
        );
    }
}

export default TodoList;

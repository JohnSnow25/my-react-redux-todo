import React, { Component } from 'react'

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleItemClick = this.handleItemClick.bind(this);
    }
    handleItemClick() {
        this.props.itemHandler(this.props.itemIndex);
    }
    render() {
        console.log("child render");
        return (
            <li
                key={this.props}
                onClick={this.handleItemClick}
            >
                {this.props.todoItem}
            </li>
        )
    }
}

export default TodoItem;
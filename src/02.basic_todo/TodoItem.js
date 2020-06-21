import React, { Component, PureComponent } from 'react'

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleItemClick = this.handleItemClick.bind(this);
    }
    handleItemClick() {
        this.props.itemHandler(this.props.itemIndex);
    }
    shouldComponentUpdate(nextProps, nextState) {
        // console.log("nextProps.itemIndex: ", nextProps.itemIndex, this.props.itemIndex);
        // console.log("nextProps.todoItem: ", nextProps.todoItem, this.props.todoItem);
        if (nextProps.itemIndex === this.props.itemIndex && nextProps.todoItem === this.props.todoItem) {
            return false;
        }
        return true;
    }
    render() {
        console.log("child render");
        return (
            <li
                key={this.props.itemIndex}
                onClick={this.handleItemClick}
            >
                {this.props.todoItem}
            </li>
        )
    }
}

export default TodoItem;
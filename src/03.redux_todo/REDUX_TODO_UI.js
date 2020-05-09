import React from 'react';
import { Input, Button, List } from 'antd';

const REDUX_TODO_UI = (props) => {
    return (
        <div style={{ margin: 10 }}>
            <div style={{ marginBottom: 20 }}>
                <Input
                    placeholder={'please input'}
                    style={{ width: 300, marginRight: 20 }}
                    onChange={props.handleInputChange}
                    value={props.inputTodo}
                />
                <Button type="primary" onClick={props.handleButtonClick}>
                    提交
                </Button>
            </div>
            <List
                style={{ width: 350 }}
                bordered
                dataSource={props.todoList}
                renderItem={
                    (item, index) => (
                        <List.Item 
                            onClick={() => props.handleItemClick(index)}
                        >
                            {item}
                        </List.Item>
                    )
                }
            />
        </div>
    )
}

export default REDUX_TODO_UI;

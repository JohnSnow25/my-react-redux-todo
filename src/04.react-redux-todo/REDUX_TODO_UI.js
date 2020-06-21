import React from 'react';
import { Input, Button, List } from 'antd';

const REDUX_TODO_UI = (props) => {
    const {handleInputChange, inputTodo, handleButtonClick, todoList, handleItemClick} = props;
    return (
        <div style={{ margin: 10 }}>
            <div style={{ marginBottom: 20 }}>
                <Input
                    placeholder={'please input'}
                    style={{ width: 300, marginRight: 20 }}
                    onChange={handleInputChange}
                    value={inputTodo}
                />
                <Button type="primary" onClick={handleButtonClick}>
                    提交
                </Button>
            </div>
            <List
                style={{ width: 350 }}
                bordered
                dataSource={todoList}
                renderItem={
                    (item, index) => (
                        <List.Item 
                            onClick={() => handleItemClick(index)}
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

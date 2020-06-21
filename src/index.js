import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from "redux"
import { Provider } from "react-redux";


// import SortTable from "./01.sortTable/SortTableApp";
// import BasicTodo from "./02.basic_todo/TodoList";
// import ReduxTodo from "./03.redux_todo/REDUX_TODO"

import reducer from "./04.react-redux-todo/store/reducer";
import TODO from './04.react-redux-todo/REDUX_TODO.js';


const store = createStore(reducer);


/*
*   01,02,03
*/
// const App = (
//     // <SortTable></SortTable>
//     // <BasicTodo></BasicTodo>
//     // <ReduxTodo></ReduxTodo>
// );


/*
*   04
*/
const App = (
    <Provider store={store}>
        <TODO />
    </Provider>
)


ReactDOM.render(App, document.getElementById('root'));

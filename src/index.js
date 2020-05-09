import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from "redux"
import { Provider } from "react-redux";

import reducer from "./04.react-redux-todo/store/reducer";
import TODO from './04.react-redux-todo/REDUX_TODO.js';

const store = createStore(reducer);


// import App from './02.basic_todo/TodoList';

// import App from './SortTableApp';



const App = (
    <Provider store={store}>
        <TODO />
    </Provider>
)


ReactDOM.render(App, document.getElementById('root'));

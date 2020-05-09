import { createStore, applyMiddleware, compose } from 'redux';
// import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk';
import reducer from './reducer';

// const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = createStore(reducer, enhancer);


export default store;

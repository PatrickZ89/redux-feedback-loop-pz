import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';




const feelingReducer = (state = '', action) => {
    if (action.type === 'SET_FEELING') {
        console.log(`Setting Feeling!`, action.payload);
        state = action.payload;
        return state;
    }
    return state;
}

const understandingReducer = (state = '', action) => {
    if (action.type === 'SET_UNDERSTANDING') {
        console.log(`Setting Understanding!`, action.payload);
        state = action.payload;
        return state;
    }
    return state;
}

const supportReducer = (state = '', action) => {
    if (action.type === 'SET_SUPPORT') {
        console.log(`Setting Support!`, action.payload);
        state = action.payload;
        return state;
    }
    return state;
}

const commentsReducer = (state = '', action) => {
    if (action.type === 'SET_COMMENTS') {
        console.log(`Setting Comments!`, action.payload);
        state = action.payload;
        return state;
    }
    return state;
}





const storeInstance = createStore(
    combineReducers({
        feelingReducer,
        understandingReducer,
        supportReducer,
        commentsReducer,

    }), 
    applyMiddleware(logger),   
);

ReactDOM.render(<Provider store={storeInstance} ><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

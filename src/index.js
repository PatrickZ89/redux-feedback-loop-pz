import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';




const feelingReducer = (state = [], action) => {
    if (action.type === 'SET_FEELING') {
        console.log(`Setting Feeling!`, action.payload);
        state = action.payload;
        return state;
    }
    return state;
}





const storeInstance = createStore(
    combineReducers({
        feelingReducer,
    }),    
);

ReactDOM.render(<Provider store={storeInstance} ><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

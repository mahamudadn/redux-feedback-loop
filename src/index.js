import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import {createStore , combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {Provider} from 'react-redux';


//Reducer


const feelingReducer = (state = [], action) => {
  if (action.type === 'GET_FEELING') {
      return [...state,  action.payload]
  }
  return state;
}


const understandingReducer = (state = [], action) => {
    if (action.type === 'GET_UNDERSTANDING') {
        return [...state,  action.payload]
    }
    return state;
}



const supportReducer = (state = [], action) => {
  if (action.type === 'GET_SUPPORT') {
      return [...state,  action.payload]
  }
  return state;
}


const commentReducer = (state = [], action) => {
  if (action.type === 'GET_COMMENT') {
      return [...state,  action.payload]
  }
  return state;
}




//Store
const storeInstance = createStore(
    combineReducers({
      feelingReducer,
      understandingReducer,
      supportReducer,
      commentReducer


    }),
    applyMiddleware(logger)
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>
);
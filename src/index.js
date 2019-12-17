import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import {applyMiddleware ,createStore,combineReducers} from 'redux';
import {Provider} from 'react-redux'
import reducer from '../src/Reducer/reducer';
import change_quantity from "../src/Reducer/quantity_reducer"
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
// import promise from 'redux-promise-middleware';
const store=createStore(
    combineReducers({
        fetch:reducer,
        change:change_quantity
    })
    ,composeWithDevTools(applyMiddleware(thunk)))
ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

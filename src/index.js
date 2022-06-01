import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {HashRouter} from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore, combineReducers} from 'redux';
import InfoReducer from './Reducers/InfoReducer';
import DaysReducer from './Reducers/DaysReducer';
import MigrainesReducer from './Reducers/MigrainesReducer';
import BadDaysReducer from './Reducers/BadDaysReducer';
import SleepInfosReducer from './Reducers/SleepInfosReducer';

const root = ReactDOM.createRoot(document.getElementById('root'));

const rootReducer = combineReducers({
  InfoReducer,
  DaysReducer,
  MigrainesReducer,
  BadDaysReducer,
  SleepInfosReducer
});


const Store = createStore(rootReducer);
console.log(Store.getState())

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={Store}>
      <App />
    </Provider>
    </BrowserRouter>

  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

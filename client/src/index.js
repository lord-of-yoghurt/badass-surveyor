import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';

import reducers from './reducers';

// DEV ONLY - REMOVE LATER
import axios from 'axios';
window.axios = axios;

const initialState = {};

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(reduxThunk)
);

//
//// render the app
//
const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(
  jsx, document.getElementById('root')
);

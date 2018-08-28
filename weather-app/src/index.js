import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

//ReduxPromise is actually managing the promise and sends it to the reducers after it's resolved (Used in reducers/reducer_weather)
import ReduxPromise from 'redux-promise'


import App from './components/app';
import reducers from './reducers';

//applyMiddleware of the middleware we want (reduxPromise) for ajax request
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));

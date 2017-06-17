import React from 'react';
import ReactDOM from 'react-dom';
/*
Hash history works without configuring your server, 
so if you're just getting started, go ahead and use it. 
But, we don't recommend using it in production, 
every web app should aspire to use browserHistory
*/
import { Provider } from 'react-redux';

import App from './components/App';
import store from './store.js';
import io from 'socket.io-client'

require('./style.scss');
console.log('Hello, my dear.');

const socket = io(`${location.protocol}//${location.hostname}:8090`);
socket.on('state', state =>
  store.dispatch({type: 'SET_STATE', state})
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

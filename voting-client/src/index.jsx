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

require('./style.scss');
console.log('Hello, my dear.');


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

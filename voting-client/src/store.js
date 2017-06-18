import { createStore, applyMiddleware } from 'redux';
import io from 'socket.io-client';

import reducer from './reducer';
import remoteActionMiddleware from './remote_action_middleware';
import { setState } from './action_creators.js';

export const socket = io(`${location.protocol}//${location.hostname}:8090`);

const createStoreWithMiddleware = applyMiddleware(
  remoteActionMiddleware(socket)
)(createStore);

const store = createStoreWithMiddleware(
  reducer,
  typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

socket.on('state', state => store.dispatch(setState(state)));

export default store;

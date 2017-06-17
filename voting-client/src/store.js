import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(
  reducer,
  typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch({
  type: 'SET_STATE',
  state: {
    vote: {
      pair: ['Sunshine', 'Moonlight'],
      tally: { Sunshine: 2 }
    }
  }
});

export default store;

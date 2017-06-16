import makeStore from './src/store';
import startServer from './src/server';

export const store = makeStore();

startServer(store);
console.log('Server started.');

store.dispatch({
  type: 'SET_ENTRIES',
  entries: require('./example_entries.json')
});
store.dispatch({ type: 'NEXT' });

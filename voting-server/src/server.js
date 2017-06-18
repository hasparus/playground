import Server from 'socket.io';

export default function startServer(store) {
  const io = new Server().attach(8090);

  const _getState = store.getState;
  store.getState = (...params) => {
    const state = _getState(...params);
    console.log("\n<> <> Sending state", state.toJS());
    return state;
  };

  store.subscribe(() => io.emit('state', store.getState().toJS()));

  io.on('connection', socket => {
    socket.emit('state', store.getState().toJS());
    socket.on('action', store.dispatch.bind(store));
  });
}

/*
We are now publishing the whole state to everyone whenever any changes occur. 
This may end up causing a lot of data transfer. 
One could think of various ways of optimizing this (e.g. just sending the relevant subset, sending diffs instead of snapshots...), 
but this implementation has the benefit of being easy to write, so we'll just use it for our example app.
*/

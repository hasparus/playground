import React from 'react';
import ReactDOM from 'react-dom';
import Voting from './components/Voting';


require('./style.scss');
console.log('Hello, my dear.');

const pair = ['Trainspotting', '28 Days Later'];

ReactDOM.render(
  <Voting pair={pair} hasVoted="Trainspotting" vote={() => null}/>,
  document.getElementById('app')
);
import React from 'react';
import { List, Map } from 'immutable';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';

import { VotingContainer } from './Voting';
import { ResultsContainer } from './Results';

const pair = List.of('Trainspotting', '28 Days Later');
const tally = Map({ Trainspotting: 5, '28 Days Later': 4 });

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact render={() => <VotingContainer {...this.props} />} />
          <Route path="/results" render={() => <ResultsContainer {...this.props} />} />
        </Switch>
      </Router>
    );
  }
}

export default App;

//

//        <Route exact path="/" render={/>} />

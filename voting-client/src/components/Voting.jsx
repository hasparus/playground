import React from 'react';
import { connect } from 'react-redux';

import Winner from './Winner';
import Vote from './Vote';

import * as actionCreators from '../action_creators';

class Voting extends React.PureComponent {
  getPair() {
    return this.props.pair || [];
  }

  isDisabled() {
    return !!this.props.hasVoted;
  }

  hasVotedFor(entry) {
    console.log(entry === this.props.hasVoted);
    return this.props.hasVoted === entry;
  }

  render() {
    return (
      <div className="voting">
        {this.props.winner
          ? <Winner ref="winner" winner={this.props.winner} />
          : <Vote {...this.props} />}
      </div>
    );
  }
}

// wire up input props
function mapStateToProps(state) {
  return {
    pair: state.getIn(['vote', 'pair']),
    hasVoted: state.get('hasVoted'),
    winner: state.get('winner')
  };
}

export const VotingContainer = connect(mapStateToProps, actionCreators)(Voting);

export default Voting;

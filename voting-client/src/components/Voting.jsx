import React from 'react';
import Winner from './Winner';
import Vote from './Vote';

import { connect } from 'react-redux';

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

function mapStateToProps(state) {
  return {
    pair: state.getIn(['vote', 'pair']),
    winner: state.get('winner')
  };
}

export const VotingContainer = connect(mapStateToProps)(Voting);

export default Voting;

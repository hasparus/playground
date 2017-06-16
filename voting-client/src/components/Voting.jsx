import React from 'react';
import Winner from './Winner';
import Vote from './Vote';

class Voting extends React.Component {
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

export default Voting;

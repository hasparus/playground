import React from 'react';

class Vote extends React.Component {
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
      <div className="vote">
        {this.getPair().map(entry => (
          <button key={entry} onClick={() => this.props.vote(entry)}>
            <h1>{entry}</h1>
            {this.hasVotedFor(entry)
              ? <div className="label">Voted</div>
              : null}
          </button>
        ))}
      </div>
    );
  }
}

export default Vote;

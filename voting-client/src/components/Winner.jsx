import React from 'react';

class Winner extends React.PureComponent {
  render() {
    return <div ref="winner">Winner is {this.props.winner}!</div>;
  }
}

export default Winner;

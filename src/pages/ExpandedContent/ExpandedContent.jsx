import React, { Component } from 'react';

class ExpandedContent extends Component {
  state = {};
  render() {
    return <h1>Expanded: {this.props.location.state.name}</h1>;
  }
}

export default ExpandedContent;

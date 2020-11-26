import React, { Component } from 'react';
import InputGroup from 'react-bootstrap/InputGroup'

class Onboarding extends Component {
  state = {};
  render() {
    return (
      <>
        <h1>Onboarding Page!</h1>
        <h2>Welcome! Tell us about all the things you would like to learn!</h2>
        {/* // TODO: Add input for custom topic */}
        {/* // TODO: Add pre-defined topics */}
        <button>Done For Now</button>
      </>
    );
  }
}

export default Onboarding;

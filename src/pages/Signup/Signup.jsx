import React, { Component } from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';
import { Container } from '../../components/StyledComponents/CustomComponents/CustomComponents';

class Signup extends Component {
  state = {
    message: '',
  };

  updateMessage = (msg) => {
    this.setState({ message: msg });
  };

  render() {
    return (
      <Container>
        <SignupForm {...this.props} updateMessage={this.updateMessage} />
        <p>{this.state.message}</p>
      </Container>
    );
  }
}

export default Signup;

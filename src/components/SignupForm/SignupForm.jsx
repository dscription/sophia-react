import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import authService from '../../services/authService';
import { LoginBox } from '../StyledComponents/CustomComponents/CustomComponents';
import { Form, Button } from 'react-bootstrap';

class SignupForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    passwordConf: '',
  };

  handleChange = (e) => {
    this.props.updateMessage('');
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    const { history, updateMessage, handleSignupOrLogin } = this.props;
    e.preventDefault();
    try {
      await authService.signup(this.state);
      // Let <App> know a user has signed up!
      handleSignupOrLogin();
      history.push('/');
    } catch (err) {
      updateMessage(err.message);
    }
  };

  isFormInvalid() {
    const { name, email, password, passwordConf } = this.state;
    return !(name && email && password === passwordConf);
  }

  render() {
    const { name, email, password, passwordConf } = this.state;
    return (
      <LoginBox>
        <h3 style={{ color: 'white' }}>Sign Up:</h3>
        <Form
          autoComplete="off"
          onSubmit={this.handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '15px',
            alignItems: 'center',
          }}
        >
          <Form.Group controlledId="formBasicName">
            <Form.Control
              type="text"
              value={name}
              name="name"
              onChange={this.handleChange}
              placeholder="Jane Doe"
            />
            <Form.Label style={{ color: 'white' }}>Name</Form.Label>
          </Form.Group>
          <Form.Group controlledId="formBasicEmail">
            <Form.Control
              type="email"
              value={email}
              name="email"
              onChange={this.handleChange}
              placeholder="Jane@JaneDoe.com"
            />
            <Form.Label style={{ color: 'white' }}>Email:</Form.Label>
          </Form.Group>
          <Form.Group controlledId="formBasicPassword">
            <Form.Control
              type="password"
              value={password}
              name="password"
              onChange={this.handleChange}
            />
            <Form.Label style={{ color: 'white' }}>Password:</Form.Label>
          </Form.Group>
          <Form.Group controlledId="formBasicPasswordConf">
            <Form.Control
              type="password"
              value={passwordConf}
              name="passwordConf"
              onChange={this.handleChange}
            />
            <Form.Label style={{ color: 'white' }}>
              Confirm Password:
            </Form.Label>
          </Form.Group>
          <Button
            variant="primary"
            style={{ width: '100px', margin: '0px auto' }}
            disabled={this.isFormInvalid()}
          >
            Sign Up
          </Button>
          &nbsp;&nbsp;
          <Link to="/">
            <Button
              variant="danger"
              style={{ width: '100px', margin: '0px auto' }}
              type="submit"
            >
              Cancel
            </Button>
          </Link>
        </Form>
      </LoginBox>
    );
  }
}

export default SignupForm;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import authService from '../../services/authService';
import {
  Container,
  LoginBox,
} from '../../components/StyledComponents/CustomComponents/CustomComponents';
import { Form, Button } from 'react-bootstrap';

class LoginPage extends Component {
  state = {
    email: '',
    pw: '',
  }; 

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    const { history, handleSignupOrLogin } = this.props;
    e.preventDefault();
    try {
      await authService.login(this.state);
      // Let <App> know a user has signed up!
      handleSignupOrLogin();
      history.push('/');
    } catch (err) {
      // Use a modal or toast in your apps instead of alert
      alert('Invalid Credentials!');
    }
  };

  render() {
    const { email, pw } = this.state;
    return (
      <Container>
        <LoginBox>
          <h3 style={{ color: 'white' }}>Log In</h3>
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
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={this.handleChange}
                value={email}
                name="email"
              />
              <Form.Label style={{ color: 'white' }}>Email</Form.Label>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={this.handleChange}
                value={pw}
                name="pw"
              />
              <Form.Label style={{ color: 'white' }}>Password</Form.Label>
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              style={{ width: '100px', margin: '0px auto' }}
            >
              Log In
            </Button>
            &nbsp;&nbsp;&nbsp;
            <Link className="btn red" to="/">
              <Button
                variant="danger"
                style={{ width: '100px', margin: '0px auto' }}
              >
                Cancel
              </Button>
            </Link>
          </Form>
        </LoginBox>
      </Container>
    );
  }
}

export default LoginPage;

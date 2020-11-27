import React, { Component } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components'

const Card = styled.div`
  text-align: center;
  margin: 0px auto;
  border: solid 2px black;
`

class Onboarding extends Component {
  state = {
    value: '',
    topics: [],
  };

  handleSubmit = () => {
    console.log('done', this.state.topics);
    // TODO: Make call to backend, send topics, and create new Topics from array of topics.
  };

  handleAddTopic = (e) => {
    e.preventDefault();
    const topics = [...this.state.topics];
    topics.push(this.state.value);
    this.setState({ topics });
    this.setState({value: ""})
  };

  handleInputChange = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    const {topics} = this.state
    return (
      <>
        <h1>Onboarding Page!</h1>
        <h2>Welcome! Tell us about all the things you would like to learn!</h2>
        <Form onSubmit={this.handleAddTopic}>
          <Form.Group controlId="add-topic">
            <InputGroup>
              <FormControl
                placeholder="add-topic"
                aria-label="add-topic"
                aria-describedby="add-topic"
                onChange={this.handleInputChange}
                value={this.state.value}
              />
              <InputGroup.Append>
                <Button
                  type="submit"
                  // onSubmit={this.handleAddTopic}
                  variant="outline-secondary"
                >
                  Add
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Form.Group>
        </Form>
        <Button onClick={this.handleSubmit}>Done For Now</Button>
        {/* // TODO: Render all topics in a box. */}
        {topics.map((topic,idx) => (
          <Card key={idx}>{topic}</Card>
        ))}
      </>
    );
  }
}

export default Onboarding;

import React, { Component } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import * as topicAPI from '../../services/topicService';

const Card = styled.div`
  text-align: center;
  margin: 0px auto;
  border: solid 2px black;
`;

const Container = styled.div`
  text-align: center;
  padding: 10px auto;
`;

class Onboarding extends Component {
  state = {
    value: '',
    topics: [],
  };

  handleSubmit = async () => {
    console.log('done', this.state.topics);
    // TODO: Make call to backend, send topics, and create new Topics from array of topics.
    const newTopics = await topicAPI.createMultiple(this.state.topics);
    this.props.handleCompleteOnboarding()
  };

  handleAddTopic = (e) => {
    e.preventDefault();
    const topics = [...this.state.topics];
    topics.push(this.state.value);
    this.setState({ topics });
    this.setState({ value: '' });
  };

  handleInputChange = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    const { topics } = this.state;

    return (
      <Container>
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
                  variant="outline-secondary"
                >
                  Add
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Form.Group>
        </Form>
        {/* // TODO: Render all topics in a box. */}
        {topics.map((topic, idx) => (
          <Card key={idx}>{topic}</Card>
        ))}
        <Button onClick={this.handleSubmit}>Done For Now</Button>
      </Container>
    );
  }
}

export default Onboarding;

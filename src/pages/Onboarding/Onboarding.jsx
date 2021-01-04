import React, { Component } from 'react';
import { Form, FormControl, Button, InputGroup } from 'react-bootstrap';
import styled from 'styled-components';
import * as topicAPI from '../../services/topicService';
import {
  OnboardingContainer,
  Heading,
  SubHeading,
  Message,
  GridContainer,
} from '../../components/StyledComponents/CustomComponents/CustomComponents';

class Onboarding extends Component {
  state = {
    value: '',
    topics: [],
  };

  handleSubmit = async () => {
    console.log('done', this.state.topics);
    // TODO: Make call to backend, send topics, and create new Topics from array of topics.
    const newTopics = await topicAPI.createMultiple(this.state.topics);
    this.props.handleCompleteOnboarding();
  };

  handleAddTopic = (e) => {
    e.preventDefault();
    const topics = [...this.state.topics];
    topics.push(this.state.value);
    this.setState({ topics });
    this.setState({ value: '' });
  };

  handleRemoveTopic = (index) => {
    const topics = [...this.state.topics];
    topics.splice(index, 1);
    this.setState({ topics });
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    const { topics } = this.state;

    return (
      <OnboardingContainer>
        <Heading>Welcome To Sophia</Heading>
        <SubHeading>What are you interested in?</SubHeading>
        <Message>
          <p>
            Sophia is a tool for life long learners, it will help you track your
            topics of interest, create todo lists to help organise your
            learning, and give you a 3D visual representation of your interests.
            Add as many topics or areas of interest as you would like below so
            you can see them on your homescreen.
          </p>
        </Message>
        <Form style={{ margin: '20px auto' }}>
          <Form.Group controlId="add-topic">
            <InputGroup>
              <FormControl
                placeholder="add-topic"
                aria-label="add-topic"
                aria-describedby="add-topic"
                onChange={this.handleChange}
                value={this.state.value}
              />
              <InputGroup.Append>
                <Button variant="success" onClick={this.handleAddTopic}>
                  Add
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Form.Group>
        </Form>
        <GridContainer>
          {topics.map((topic, idx) => (
            <Button
              variant="danger"
              key={idx}
              style={{ minWidth: '200px' }}
              onClick={() => this.handleRemoveTopic(idx)}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>{topic}</div>
                <div>X</div>
              </div>
            </Button>
          ))}
        </GridContainer>
        {topics.length > 0 && (
          <Button
            style={{ width: '150px' }}
            variant="primary"
            onClick={this.handleSubmit}
          >
            Done For Now
          </Button>
        )}
      </OnboardingContainer>
    );
  }
}

export default Onboarding;

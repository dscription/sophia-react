import React, { Component } from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

const Container = styled.div`
  margin: 10px 10px;
  padding: 0px 20px;
  align-items: center;
  text-align: center;
`;

class ExpandedContent extends Component {
  state = {
    formData: {
      contentType: '',
    },
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitting form');
  };

  handleSelectContentType = (e) => {
    e.preventDefault();
    const contentType = e.target.value;
    this.setState({ formData: { contentType } });
  };

  render() {
    return (
      <Container>
        {/* //TODO: Topic Name */}
        {/* Content Name */}
        <h1> {this.props.location.state.name}</h1>
        {/* Edit card From */}
        <Form onSubmit={this.handleSubmit}>
          {/* // TODO: Drop down menu to select type of Content */}

          <Form.Group controlId="selectContentType">
            <Form.Control as="select" onChange={this.handleSelectContentType}>
              <option>Book</option>
              <option>Article</option>
              <option>Video</option>
              <option>Online Course</option>
            </Form.Control>
          </Form.Group>
          {/* // TODO: Todolist with checkboxes. */}
          <Button type="submit">Update Card</Button>
        </Form>
      </Container>
    );
  }
}

export default ExpandedContent;

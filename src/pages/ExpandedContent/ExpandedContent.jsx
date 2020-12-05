import React, { Component } from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import * as contentAPI from '../../services/contentService';

const Container = styled.div`
  margin: 10px 100px;
  padding: 20px 100px;
  align-items: center;
  text-align: center;
  border: 1px solid grey;
  border-radius: 10px;
`;

// const InputGroup = styled.div``


class ExpandedContent extends Component {
  state = {
    formData: {
      ...this.props.location.state,
    },
    newTodoValue: '',
  };

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('submitting form');
  // };

  handleSelectContentType = (e) => {
    e.preventDefault();
    const contentType = e.target.value;
    const formData = this.state.formData;
    formData.method = contentType;
    this.setState({ formData: formData });
  };

  handleInputLink = (e) => {
    e.preventDefault();
    const link = e.target.value;
    const formData = this.state.formData;
    formData.link = link;
    this.setState({ formData: formData });
  };

  handleIsUrgent = (e) => {
    // e.preventDefault();
    const formData = this.state.formData;
    formData.isUrgent = !formData.isUrgent;
    this.setState({ formData: formData });
  };

  handleIsCompleted = (e) => {
    // e.preventDefault();
    const formData = this.state.formData;
    formData.isCompleted = !formData.isCompleted;
    this.setState({ formData: formData });
  };

  handleAddTodo = (e) => {
    const newTodoValue = this.state.newTodoValue;
    const newTodo = { name: newTodoValue, isDone: false };
    const formData = this.state.formData;
    formData.todos.push(newTodo);
    this.setState({ formData: formData });
  };

  handleChangeTodoValue = (e) => {
    e.preventDefault();
    console.log(e.target.value)
    const newTodoValue = e.target.value;
    this.setState({ newTodoValue: newTodoValue });
  };

  handleToggleTodo = (e) => {
    const todoIndex = e.target.value;
    const formData = this.state.formData;
    formData.todos[todoIndex].isDone = !formData.todos[todoIndex].isDone;
    this.setState({ formData: formData });
  };

  handlePersistContentInfo = async () => {
    // send formData from state to service function calling PUT request to back end to update content.
    console.log('update content card clicked');
    const { _id } = this.props.location.state;
    const { formData } = this.state;
    const savedContent = await contentAPI.updateContent(formData, _id);
    console.log(savedContent);
  };

  render() {
    const { formData } = this.state;
    const { todos } = this.state.formData;
    return (
      <Container>
        {/* //TODO: Topic Name */}
        {/* Content Name */}
        <h1> {this.props.location.state.name}</h1>
        {/* Edit card From */}
        <Form>
          <Form.Group controlId="selectContentType">
            <Form.Label>Content Type</Form.Label>
            <Form.Control as="select" onChange={this.handleSelectContentType}>
              <option>Book</option>
              <option>Article</option>
              <option>Video</option>
              <option>Online Course</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="addLink">
            <Form.Label>Content Link</Form.Label>
            <Form.Control
              type="link"
              placeholder="Add Content Link"
              onChange={this.handleInputLink}
            />
          </Form.Group>
          <Form.Group controlId="checkboxes">
            <Form.Check
              type="checkbox"
              label={
                formData.isUrgent ? 'Change to Not Urgent' : 'Mark as Urgent'
              }
              onChange={this.handleIsUrgent}
            />
            <Form.Check
              type="checkbox"
              label={
                formData.isCompleted ? 'Mark as Incomplete' : 'Mark as complete'
              }
              onChange={this.handleIsCompleted}
            />
          </Form.Group>
          <Button onClick={this.handlePersistContentInfo}>Update Card</Button>
        </Form>
        {/* Todo List */}
        <h1>ToDo List</h1>
        <Form>
          <InputGroup>
            <FormControl
              placeholder="add new todo item"
              aria-label="todo-item"
              onChange={this.handleChangeTodoValue}
            />
            <InputGroup.Append>
              <Button onClick={this.handleAddTodo}>Add ToDo</Button>
            </InputGroup.Append>
          </InputGroup>
          {/* // Render Todos */}
          {todos.length > 0 ? (
            todos.map((todo, idx) => (
              <Form.Check
                key={idx}
                type="checkbox"
                label={todo.name}
                onClick={this.handleToggleTodo}
                value={idx}
              />
            ))
          ) : (
            <h1>No todos just yet</h1>
          )}
          <Button onClick={this.handlePersistContentInfo}>
            Update ToDo List
          </Button>
        </Form>
      </Container>
    );
  }
}

export default ExpandedContent;

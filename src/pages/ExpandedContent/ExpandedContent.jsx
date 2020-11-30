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
      name: this.props.location.state.name,
      method: {
        type: '',
      },
      link: this.props.location.state.link
        ? this.props.location.state.link
        : '',
      notes: this.props.location.state.notes
        ? this.props.location.state.notes
        : [],
      todos: [],
      isCompleted: this.props.location.state.isCompleted,
      isUrgent: this.props.location.state.isUrgent,
    },
    newTodoValue: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitting form');
  };

  handleSelectContentType = (e) => {
    e.preventDefault();
    const contentType = e.target.value;
    const formData = this.state.formData;
    formData.method.type = contentType;
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
    const newTodoValue = e.target.value;
    this.setState({ newTodoValue: newTodoValue });
  };

  handleToggleTodo = (e) => {
    const todoIndex = e.target.value
    const formData = this.state.formData;
    formData.todos[todoIndex].isDone = !formData.todos[todoIndex].isDone
    this.setState({formData: formData})
  }

  render() {
    const { formData } = this.state;
    const { todos } = this.state.formData;
    return (
      <Container>
        {/* //TODO: Topic Name */}
        {/* Content Name */}
        <h1> {this.props.location.state.name}</h1>
        {/* Edit card From */}
        <Form onSubmit={this.handleSubmit}>
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
          <Button type="submit">Update Card</Button>
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
              <Form.Check key={idx} type="checkbox" label={todo.name} onClick={this.handleToggleTodo} value={idx}/>
            ))
          ) : (
            <h1>No todos just yet</h1>
          )}
        </Form>
      </Container>
    );
  }
}

export default ExpandedContent;

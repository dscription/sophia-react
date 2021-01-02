import React, { Component } from 'react';
import styled from 'styled-components';

import * as contentAPI from '../../services/contentService';
import TodoList from '../../components/TodoList/TodoList';
import ContentDetails from '../../components/ContentDetails/ContentDetails';

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

  

  handleAddTodo = (e) => {
    const newTodoValue = this.state.newTodoValue;
    const newTodo = { name: newTodoValue, isDone: false };
    const formData = this.state.formData;
    formData.todos.push(newTodo);
    this.setState({ formData: formData });
  };

  handleDeleteTodo = (e) => {
    e.preventDefault();
    // use index to splice todo out of state
    const todoIndex = e.target.value;
    const todos = this.state.formData.todos;
    todos.splice(todoIndex, 1);
    this.setState({ todos: todos });
    // use id to
    console.log('todo id', e.target.name);
  };

  handleChangeTodoValue = (e) => {
    e.preventDefault();
    console.log(e.target.value);
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
        <h1> {this.props.location.state.name}</h1>
        <ContentDetails formData={this.props.location.state}/>
        {/* <TodoList todos={todos} /> */}
      </Container>
    );
  }
}

export default ExpandedContent;

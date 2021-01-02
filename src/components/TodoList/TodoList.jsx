import React, { useState } from 'react';
import styled from 'styled-components'
import { FormControl, InputGroup, Form, Button } from 'react-bootstrap';

const TodoGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 5px;
`

const TodoList = ({ todos, setTodos }) => {
  const [newTodo, setNewTodo] = useState({
    name: '',
    isDone: false,
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setNewTodo({ ...newTodo, [name]: value });
  };

  const handleAddTodo = () => {
    const updatedTodos = todos;
    updatedTodos.push(newTodo);
    setTodos(updatedTodos);
    setNewTodo({ ...newTodo, name: '' });
  };

  const handleDeleteTodo = (todoIndex, todoId) => {
    const updatedTodos = todos;
    updatedTodos.splice(todoIndex, 1);
    setTodos(updatedTodos);
    setNewTodo({ ...newTodo, name: '' });
  };

  return (
    <>
      <h1>ToDo List</h1>
      <Form>
        <InputGroup>
          <FormControl
            placeholder="add new todo item"
            aria-label="todo-item"
            value={newTodo.name}
            name="name"
            onChange={handleChange}
          />
          <InputGroup.Append>
            <Button onClick={handleAddTodo}>Add ToDo</Button>
          </InputGroup.Append>
        </InputGroup>
        {todos ? (
          todos.map((todo, idx) => (
            <TodoGroup key={idx}>
              <Form.Check type="checkbox" label={todo.name} value={idx} />
              <Button
                value={idx}
                onClick={() => handleDeleteTodo(idx, todo._id)}
              >
                -
              </Button>
            </TodoGroup>
          ))
        ) : (
          <h1>No todos just yet</h1>
        )}
      </Form>
    </>
  );
};

export default TodoList;

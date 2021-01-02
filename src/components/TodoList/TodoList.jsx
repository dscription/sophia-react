import React from 'react';
import { FormControl, InputGroup, Form, Button } from 'react-bootstrap';

const TodoList = ({todos}) => {
  return (
    <>
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
            <div key={idx}>
              <Form.Check
                type="checkbox"
                label={todo.name}
                onClick={this.handleToggleTodo}
                value={idx}
              />
              <button
                name={todo._id}
                value={idx}
                onClick={this.handleDeleteTodo}
              >
                -
              </button>
            </div>
          ))
        ) : (
          <h1>No todos just yet</h1>
        )}
        <Button onClick={this.handlePersistContentInfo}>
          Update ToDo List
        </Button>
      </Form>
    </>
  );
};

export default TodoList;

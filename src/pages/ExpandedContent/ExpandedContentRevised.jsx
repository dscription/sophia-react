import React from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';
import * as contentAPI from '../../services/contentService';

const Container = styled.div`
  margin: 10px 100px;
  padding: 20px 100px;
  align-items: center;
  text-align: center;
  border: 1px solid grey;
  border-radius: 10px;
  ${'' /* height: 100vh; */}
`;

// const FormGroup = styled.div``
// const InputGroup = styled.div``;

const ExpandedContentRevised = ({ location }) => {
  const {
    isCompleted,
    isUrgent,
    link,
    method,
    name,
    notes,
    todos,
  } = location.state;
  const formik = useFormik({
    initialValues: {
      name: name,
      link: link,
      method: method,
      notes: notes,
      todos: todos,
      isUrgent: isUrgent,
      isCompleted: isCompleted,
    },
    onSubmit: (values) => {
      // TODO: Do something with the submitted form values.
      // calls the database and submits all the information above
    },
  });

  return (
    <>
      <Container>
        {/* //TODO: Topic Name */}
        <h1> {location.state.name}</h1>
        {/* Edit card From */}
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="method">Content Type</label>
            <select
              id="method"
              name="method"
              // type="select"
              onChange={formik.handleChange}
              value={formik.values.method}
            >
              <option>Book</option>
              <option>Article</option>
              <option>Video</option>
              <option>Online Course</option>
            </select>
          </div>
          <div>
            <label htmlFor="link">Content Link</label>
            <input
              id="link"
              name="link"
              placeholder="Add Content Link"
              onChange={formik.handleChange}
              value={formik.values.link}
            />
          </div>

          <div>
            <input
              id="isUrgent"
              name="isUrgent"
              type="checkbox"
              onChange={formik.handleChange}
              value={formik.values.isUrgent}
            />
            <label htmlFor="isUrgent">
              {formik.values.isUrgent
                ? 'Change to Not Urgent'
                : 'Mark as urgent'}
            </label>
          </div>
          <div>
            <input
              id="isCompleted"
              name="isCompleted"
              type="checkbox"
              onChange={formik.handleChange}
              value={formik.values.isCompleted}
            />
            <label htmlFor="isCompleted">
              {formik.values.isCompleted
                ? 'Mark as incomplete'
                : 'Mark as complete'}
            </label>
          </div>
          <button>Update Card</button>
        </form>

        {/* <h1>ToDo List</h1>
    <form>
      <div>
        <input
          placeholder="add new todo item"
          aria-label="todo-item"
          onChange={this.handleChangeTodoValue}
        />
        <div>
          <button onClick={this.handleAddTodo}>Add ToDo</button>
        </div>
      </div>
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
      <button onClick={this.handlePersistContentInfo}>
        Update ToDo List
      </button> */}
        {/* </form> */}
      </Container>
      <pre>{JSON.stringify(formik.values)}</pre>
    </>
  );
};

export default ExpandedContentRevised;

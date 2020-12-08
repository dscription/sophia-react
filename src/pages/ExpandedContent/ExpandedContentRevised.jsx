import React from 'react';
import styled from 'styled-components';
import { Formik, Form, Field, FieldArray } from 'formik';

const Container = styled.div`
  margin: 10px 100px;
  padding: 20px 100px;
  align-items: center;
  text-align: center;
  border: 1px solid grey;
  border-radius: 10px;
  ${'' /* height: 100vh; */}
`;

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

  return (
    <>
      <Container>
        <h1> {location.state.name}</h1>
        <Formik
          initialValues={{
            name: name,
            link: link,
            method: method,
            notes: notes,
            todos: todos,
            isUrgent: isUrgent,
            isCompleted: isCompleted,
          }}
          onSubmit={(values) => {
            // console.log(values)
          }}
        >
          {(formik) => (
            <Form>
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
              {/* Todo List */}
              <h1>Todo List</h1>
              <FieldArray
                name="todos"
                render={(arrayHelpers) => (
                  <>
                    <div>
                      <h1>Add a todo</h1>
                      <button
                        type="button"
                        onClick={() => {
                          arrayHelpers.push({ name: '', isDone: 'false' });
                        }}
                      >
                        Create Todo
                      </button>
                    </div>

                    {formik.values.todos && formik.values.todos.length > 0 ? (
                      <>
                        <div>
                          <input
                            id="todos[-1].name"
                            name="todos[-1].name"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.todos[0].name}
                            placeholder="create todo"
                          />
                          <button
                            type="button"
                            onClick={() => {
                              arrayHelpers.push({
                                name: '',
                                isDone: 'false',
                              });
                            }}
                          >
                            Add Todo
                          </button>
                        </div>
                        <h1>You have todos</h1>
                        {/* // TODO: Map through todos */}

                        {formik.values.todos.map((todo, index) => (
                          <h1>todo</h1>
                        ))}
                      </>
                    ) : (
                      <h1>You dont have todos</h1>
                    )}

                    <pre>{JSON.stringify(formik.values)}</pre>
                  </>
                )}
              />
            </Form>
          )}
        </Formik>
      </Container>
    </>
  );
};

export default ExpandedContentRevised;

// {formik.values.todos && formik.values.todos.length > 0 ? (
//   // If there are todos, render this below
//   <div>
//     <h1>You have todos</h1>
//     {formik.values.todos.map((todo, index) =>
//       todo.name.length > 0 ? (
//         <label>
//           <input
//             id={`todos[${index}].isDone`}
//             name={`todos[${index}].isDone`}
//             type="checkbox"
//             onChange={formik.handleChange}
//             // value={formik.values.todos[index].isDone}
//           />
//           {todo.name}
//         </label>
//       ) : (
//         <>
//           <input
//             id={`formik.values.todos[${index}].name`}
//             name={`formik.values.todos[${index}].name`}
//             type="text"
//             onChange={formik.handleChange}
//             value={formik.values.todos[index].name}
//             placeholder="create todo"
//           />
//           <button
//             type="button"
//             onClick={() => {
//               arrayHelpers.push({
//                 name: '',
//                 isDone: 'false',
//               });
//             }}
//           >
//             Add Todo
//           </button>
//         </>
//       )
//     )}
//   </div>
// ) : (
//   // If there are no todos render this
//   <h1> You have no todos</h1>
// // )}

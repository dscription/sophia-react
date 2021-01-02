import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

import * as contentAPI from '../../services/contentService';
import TodoList from '../../components/TodoList/TodoList';
import ContentDetails from '../../components/ContentDetails/ContentDetails';

const Container = styled.div`
  height: 70vh;
  margin: 10px 100px;
  padding: 20px 25px;
  align-items: center;
  text-align: center;
  border: 1px solid grey;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
`;

const ContentModal = ({ location }) => {
  const [contentDetails, setContentDetails] = useState(location.state);
  const [todos, setTodos] = useState(location.state.todos);

  const handleUpdateContentDetails = async () => {
    const { _id } = contentDetails;
    const newContentDetails = contentDetails;
    newContentDetails.todos = todos;
    // Make API call to update content details
    const newDetails = await contentAPI.updateContent(newContentDetails, _id);
    setContentDetails(newDetails);
    console.log(contentDetails);
  };

  const { name } = location.state;
  return (
    <Container>
      <ContentDetails
        contentDetails={contentDetails}
        setContentDetails={setContentDetails}
      />
      <div>
        <TodoList todos={todos} setTodos={setTodos} />
        <Button onClick={handleUpdateContentDetails}>Update Details</Button>
      </div>
    </Container>
  );
};

export default ContentModal;

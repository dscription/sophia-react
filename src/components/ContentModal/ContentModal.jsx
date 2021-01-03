import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

import * as contentAPI from '../../services/contentService';
import TodoList from '../TodoList/TodoList';
import ContentDetails from '../ContentDetails/ContentDetails';

const ContentModal = ({ content, index }) => {
  const [contentDetails, setContentDetails] = useState(content);
  const [todos, setTodos] = useState(content.todos);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleUpdateContentDetails = async () => {
    const { _id } = contentDetails;
    const newContentDetails = contentDetails;
    newContentDetails.todos = todos;
    // Make API call to update content details
    const newDetails = await contentAPI.updateContent(newContentDetails, _id);
    setContentDetails(newDetails);
  };

  return (
    <>
      <Button onClick={handleShow}>{content.name}</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{content.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ContentDetails
            contentDetails={contentDetails}
            setContentDetails={setContentDetails}
          />
          <div>
            <TodoList todos={todos} setTodos={setTodos} />
            <Button onClick={handleUpdateContentDetails}>Update Details</Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ContentModal;

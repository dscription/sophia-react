import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const ContentDetails = (props) => {
  const [formData, setFormData] = useState(props.formData);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    const newFormData = formData;
    newFormData[name] = value;
    setFormData({ ...newFormData });
  };

  const handleToggle = (e) => {
    const { name, value } = e.target;
    const newFormData = formData;
    newFormData[name] = !newFormData[name];
    setFormData({ ...newFormData });
  };

  return (
    <Form>
      <Form.Group controlId="selectContentType">
        <Form.Label>Content Type</Form.Label>
        <Form.Control
          as="select"
          name="method"
          onChange={handleChange}
          value={formData.method}
        >
          <option value="Book">Book</option>
          <option value="Article">Article</option>
          <option value="Video">Video</option>
          <option value="Online-course">Online Course</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="addLink">
        <Form.Label>Content Link</Form.Label>
        <Form.Control
          type="link"
          placeholder="Add Content Link"
          onChange={handleChange}
          name="link"
        />
      </Form.Group>
      <Form.Group controlId="checkboxes">
        <Form.Check
          type="checkbox"
          label={formData.isUrgent ? 'Change to Not Urgent' : 'Mark as Urgent'}
          name="isUrgent"
          value={formData.isUrgent}
          onChange={handleToggle}
        />
        <Form.Check
          type="checkbox"
          label={
            formData.isCompleted ? 'Mark as Incomplete' : 'Mark as complete'
          }
          name="isCompleted"
          value={formData.isCompleted}
          onChange={handleToggle}
        />
      </Form.Group>
      <Button>Update Card</Button>
    </Form>
  );
};

export default ContentDetails;

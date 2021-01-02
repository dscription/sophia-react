import React, { useState } from 'react';
import { FormControl, InputGroup, Button } from 'react-bootstrap';
import * as contentAPI from '../../services/contentService';

const AddTopicBar = ({ topic, getTopicContents }) => {
  const [formData, setFormData] = useState({ name: '' });

  const handleAddContent = async (e) => {
    e.preventDefault();
    const newContent = await contentAPI.createContent(formData, topic._id);
    getTopicContents(topic);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ [name]: value });
  };

  return (
    <InputGroup>
      <FormControl
        placeholder="add-content"
        aria-label="add-content"
        aria-describedby="add-content"
        onChange={handleInputChange}
        name="name"
        value={formData.name}
      />
      <InputGroup.Append>
        <Button variant="outline-secondary" onClick={handleAddContent}>
          Add
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
};

export default AddTopicBar;

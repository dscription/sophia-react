import { Form } from 'react-bootstrap';

const ContentDetails = ({ contentDetails, setContentDetails }) => {
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    const newContentDetails = contentDetails;
    newContentDetails[name] = value;
    setContentDetails({ ...newContentDetails });
  };

  const handleToggle = (e) => {
    const { name } = e.target;
    const newContentDetails = contentDetails;
    newContentDetails[name] = !newContentDetails[name];
    setContentDetails({ ...newContentDetails });
  };

  const { name } = contentDetails;
  return (
    <Form>
      <h1>{name}</h1>
      <Form.Group controlId="selectContentType">
        <Form.Label>Content Type</Form.Label>
        <Form.Control
          as="select"
          name="method"
          onChange={handleChange}
          value={contentDetails.method}
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
          value={contentDetails.link}
        />
      </Form.Group>
      <Form.Group controlId="checkboxes">
        <Form.Check
          type="checkbox"
          label={
            contentDetails.isUrgent ? 'Change to Not Urgent' : 'Mark as Urgent'
          }
          name="isUrgent"
          value={contentDetails.isUrgent}
          onChange={handleToggle}
        />
        <Form.Check
          type="checkbox"
          label={
            contentDetails.isCompleted
              ? 'Mark as Incomplete'
              : 'Mark as complete'
          }
          name="isCompleted"
          value={contentDetails.isCompleted}
          onChange={handleToggle}
        />
      </Form.Group>
    </Form>
  );
};

export default ContentDetails;

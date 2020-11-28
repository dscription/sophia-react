import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import ContentCard from '../ContentCard/ContentCard.jsx';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import * as contentAPI from '../../services/contentService';
import * as topicAPI from '../../services/topicService'

class TopicCard extends Component {
  state = {
    contents: topicAPI.getTopicContents(this.props.topic._id),
    value:'',
  };

  handleAddContent = async (e) => {
    e.preventDefault()
    const newContent = await contentAPI.createContent({name: this.state.value}, this.props.topic._id)
    this.setState({contents: await topicAPI.getTopicContents(this.props.topic._id)})
    // call service function to populate all contents in the topic card
  }

  handleInputChange = (e) => {
    this.setState({ value: e.target.value });
  };

  async componentWillMount() {
    this.setState({contents: await topicAPI.getTopicContents(this.props.topic._id)})
  }

  render() {
    const { topic } = this.props;
    const { contents } = this.state;
    return (
      <Card
        style={{
          width: '200px',
          height: '450px',
          margin: '10px auto',
        }}
      >
        <Card.Header>
          <>{topic.name}</>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={this.handleAddContent}>
            <Form.Group controlId="add-content">
              <InputGroup>
                <FormControl
                  placeholder="add-content"
                  aria-label="add-content"
                  aria-describedby="add-content"
                  onChange={this.handleInputChange}
                  value={this.state.value}
                />
                <InputGroup.Append>
                  <Button type="submit" variant="outline-secondary">
                    Add
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </Form.Group>
          </Form>
          {contents.length > 0 ? (
            contents.map((content) => <ContentCard content={content} />)
          ) : (
            <span>No Content Yet</span>
          )}
        </Card.Body>
      </Card>
    );
  }
}

export default TopicCard;

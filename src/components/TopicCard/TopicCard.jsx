import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ContentCard from '../ContentCard/ContentCard.jsx';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import * as contentAPI from '../../services/contentService';
import * as topicAPI from '../../services/topicService';
import styled from 'styled-components';
import {CardColumn, CardBody, Header} from '../StyledComponents/TopicCardComponents'



class TopicCard extends Component {
  state = {
    contents: topicAPI.getTopicContents(this.props.topic._id),
    value: '',
    formData: {
      name: '',
    },
  };

  handleAddContent = async (e) => {
    e.preventDefault();
    const { formData } = this.state;
    const newContent = await contentAPI.createContent(
      formData,
      this.props.topic._id
    );
    this.setState({
      contents: await topicAPI.getTopicContents(this.props.topic._id),
    });
  };

  handleInputChange = (e) => {
    const formData = this.state.formData;
    formData.name = e.target.value;
    this.setState({ formData: formData });
  };

  async componentWillMount() {
    this.setState({
      contents: await topicAPI.getTopicContents(this.props.topic._id),
    });
  }

  render() {
    const { topic } = this.props;
    const { contents } = this.state;
    return (
      <CardColumn>
        <Header>
          <div>{topic.name}</div>
        </Header>
        <CardBody>
          <Form onSubmit={this.handleAddContent}>
            <Form.Group controlId="add-content">
              <InputGroup>
                <FormControl
                  placeholder="add-content"
                  aria-label="add-content"
                  aria-describedby="add-content"
                  onChange={this.handleInputChange}
                  value={this.state.formData.name}
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
            contents.map((content,index) => (
              <Link key={index} to={{ pathname: '/expanded-content', state: content }}>
                <ContentCard content={content} />
              </Link>
            ))
          ) : (
            <span>No Content Yet</span>
          )}
        </CardBody>
      </CardColumn>
    );
  }
}

export default TopicCard;

import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

class TopicCard extends Component {
  state = {};
  render() {
    const { topic } = this.props;
    return (
      <Card
        style={{
          width: '200px',
          height: '450px',
          margin: '10px auto',
        }}
      >
        <Card.Header>{topic.name}</Card.Header>
        <Card.Body>
          <h2>stuff</h2>
        </Card.Body>
      </Card>
    );
  }
}

export default TopicCard;

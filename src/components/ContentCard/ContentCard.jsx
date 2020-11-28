import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

class ContentCard extends Component {
  state = {};
  render() {
    const { content } = this.props;
    return (
      <>
        <Card
          style={{
            width: 'auto',
            height: '40px',
            margin: '5px auto',
          }}
        >
          <Card.Body>
            <Card.Text>{content.name}</Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default ContentCard;

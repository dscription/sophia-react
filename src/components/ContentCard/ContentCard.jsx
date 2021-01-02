import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const ContentCard = ({ content, index }) => {
  return (
    <Link key={index} to={{ pathname: '/content-modal', state: content }}>
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
    </Link>
  );
};

export default ContentCard;

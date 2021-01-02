import React from 'react';
import Card from 'react-bootstrap/Card';

const ContentCard = ({ content }) => {
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
};

export default ContentCard;

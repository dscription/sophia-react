import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import AddTopicBar from '../AddTopicBar/AddTopicBar';
import Contents from '../Contents/Contents';

import * as topicAPI from '../../services/topicService';

const TopicCard = ({ topic }) => {
  const [contents, setContents] = useState('');

  const getTopicContents = async (topic) => {
    const topicContents = await topicAPI.getTopicContents(topic._id);
    setContents(topicContents);
  };

  useEffect(() => {
    getTopicContents(topic);
  }, []);

  return (
    <Card className="text-center" style={{ height: '90%' }}>
      <Card.Title>{topic.name}</Card.Title>
      <Card.Body>
        <AddTopicBar topic={topic} getTopicContents={getTopicContents} />
        <Contents contents={contents} />
      </Card.Body>
    </Card>
  );
};

export default TopicCard;

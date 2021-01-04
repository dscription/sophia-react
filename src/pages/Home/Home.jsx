import React, { useState, useEffect } from 'react';
import Topics from '../../components/Topics/Topics';
import ThreeD from '../../components/ThreeD/ThreeD';
import { Container } from 'react-bootstrap';

import * as topicAPI from '../../services/topicService';

const Home = () => {
  const [topics, setTopics] = useState('');

  useEffect(() => {
    getTopics();
  }, []);

  const getTopics = async () => {
    const topics = await topicAPI.getUsersTopics();
    setTopics(topics);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {topics && (
        <>
          <ThreeD topics={topics}  />
          <Topics topics={topics}  />
        </>
      )}
    </div>
  );
};

export default Home;

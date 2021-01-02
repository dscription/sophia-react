import React, { useState, useEffect } from 'react';
import Topics from '../../components/Topics/Topics';
import ThreeD from '../../components/ThreeD/ThreeD';
import { Container } from '../../components/StyledComponents/GeneralComponents';

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
    <Container>
      {topics && (
        <>
          <ThreeD topics={topics} />
          <Topics topics={topics} />
        </>
      )}
    </Container>
  );
};

export default Home;

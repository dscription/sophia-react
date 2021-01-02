import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Topics from '../../components/Topics/Topics'
import ThreeD from '../../components/ThreeD/ThreeD';
import * as topicAPI from '../../services/topicService';

const OuterContainer = styled.div`
  align-items: center;
  text-align: center;
  background-color: grey;
  height: 90vh;
  min-width: 1200px;
  display: flex;
  flex-direction: column;
`;



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
    <OuterContainer>
      {topics && (
        <>
          <ThreeD topics={topics} />
          <Topics topics={topics}/>
        </>
      )}
    </OuterContainer>
  );
};

export default Home;

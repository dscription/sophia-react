import React from 'react';
import styled from 'styled-components';
import TopicCard from '../../components/TopicCard/TopicCard';

const TopicsContainer = styled.div`
  align-items: flex-start;
  background-color: lightblue;
  display: flex;
  height: 100%;
`;

const Topics = ({ topics }) => {
  return (
    <TopicsContainer>
      {topics ? (
        topics.map((topic, idx) => <TopicCard key={idx} topic={topic} />)
      ) : (
        <h1> no topics yet</h1>
      )}
    </TopicsContainer>
  );
};

export default Topics;

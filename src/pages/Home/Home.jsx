import React, { Component } from 'react';
import styled from 'styled-components';
import TopicCard from '../../components/TopicCard/TopicCard';
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

const TopicsContainer = styled.div`
  align-items: flex-start;
  background-color: lightblue;
  display: flex;
  height: 100%;
`;

class Home extends Component {
  state = { topics: [] };

  async componentWillMount() {
    const topics = await topicAPI.getUsersTopics();
    this.setState({ topics });
  }

  render() {
    const { topics } = this.state;
    return (
      <OuterContainer>
        {/* Passing the loaded user topics to the ThreeD component. */}
        <ThreeD topics={topics} />
        <TopicsContainer>
          {topics ? (
            topics.map((topic, idx) => <TopicCard key={idx} topic={topic} />)
          ) : (
            <h1> no topics yet</h1>
          )}
        </TopicsContainer>
      </OuterContainer>
    );
  }
}

export default Home;

import React, { Component } from 'react';
import * as topicAPI from '../../services/topicService';
import styled from 'styled-components';
import TopicCard from '../../components/TopicCard/TopicCard'

const OuterContainer = styled.div`
  align-items: center;
  text-align: center;
  background-color: grey;
  height: 100vh;
  min-width: 1200px;
`;

const TopicsContainer = styled.div`
  align-items: flex-start;
  background-color: lightblue;
  display: flex;
  height: 100%
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
        <h1>Home Page</h1>
        <TopicsContainer>
          { topics ? 
            (topics.map((topic, idx) => (
            <TopicCard key={idx} topic={topic} />
          ))) : <h1> no topics yet</h1>
          }
        </TopicsContainer>
      </OuterContainer>
    );
  }
}

export default Home;

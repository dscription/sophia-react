import TopicCard from '../../components/TopicCard/TopicCard';
import { Col, CardDeck } from 'react-bootstrap';

const Topics = ({ topics }) => {
  return (
    <CardDeck
      bg="light"
      style={{
        flexWrap: 'nowrap',
        padding: '10px 20px',
        background: '#536878',
        overflow: 'scroll',
      }}
    >
      {topics ? (
        topics.map((topic, idx) => <TopicCard key={idx} topic={topic} />)
      ) : (
        <h1> no topics yet</h1>
      )}
    </CardDeck>
  );
};

export default Topics;

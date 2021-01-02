import TopicCard from '../../components/TopicCard/TopicCard';
import {TopicsContainer} from '../StyledComponents/GeneralComponents'



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

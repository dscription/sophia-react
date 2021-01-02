import React from 'react';
import ContentCard from '../ContentCard/ContentCard.jsx';

const Contents = ({ contents }) => {
  return (
    <>
      {contents &&
        contents.map((content, index) => (
          <ContentCard content={content} index={index} />
        ))}
    </>
  );
};

export default Contents;
